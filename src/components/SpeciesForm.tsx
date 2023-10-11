"use client";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { speciesUseCase } from "@/useCases/species";
import { uploadUseCase } from "@/useCases/upload";
import { Button } from "@/design-system/Button";
import { FileInput } from "@/design-system/FileInput";
import { LoadingSpinner } from "@/design-system/Loader";
import { TextArea, Input, Select } from "@/design-system/form";
import { SpeciesToUpdate } from "@/domain/species/repository";
import { Species } from "@/domain/species/type";

type FormMode = "update" | "creation";
const SubmittingLoader = ({ mode }: { mode: FormMode }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none flex flex-col justify-center items-center bg-[#f8f8f8]/90">
      <div className="mb-3">
        {`Espèce en cours ${
          mode === "update" ? `de mise à jour` : "de création"
        }`}
        ...
      </div>
      <div className="w-5 h-5">
        <LoadingSpinner />
      </div>
    </div>
  );
};
const createOrUpdateSpecies =
  (mode: FormMode) =>
  async (speciesAndFile: SpeciesToUpdate, event?: React.BaseSyntheticEvent) => {
    event?.preventDefault();
    const { file, ...species } = speciesAndFile;
    let publicUrl = species.seed_image;
    const isNewImageUploaded =
      file?.name !== species.seed_image?.split("/").at(-1);
    if (file && isNewImageUploaded) {
      publicUrl = await uploadUseCase.upload(file);
    }
    const fn =
      mode === "creation" ? speciesUseCase.create : speciesUseCase.update;

    fn({
      ...species,
      seed_image: publicUrl,
      slug: species.slug ?? species.name.replace(" ", "_"),
    });
  };

export const SpeciesForm = ({ defaultValues }: { defaultValues?: Species }) => {
  const { register, handleSubmit, formState, control } =
    useForm<SpeciesToUpdate>({
      defaultValues,
    });
  const router = useRouter();

  const { isSubmitSuccessful, isSubmitting, errors } = formState;
  if (isSubmitSuccessful) {
    /**
     * Addition of a useless queryparams + refresh to prevent NextJS caching thanks to this thread:
     * https://stackoverflow.com/questions/72391532/next-js-router-push-not-refreshing-the-page
     */
    router.push("/?u=true");
    router.refresh();
  }

  const shouldDisplayLoaderBeforeRedirect = isSubmitting || isSubmitSuccessful;
  const mode: FormMode =
    defaultValues?.seed_image === undefined ? "creation" : "update";
  return (
    <form
      className="md:flex relative"
      onSubmit={handleSubmit(createOrUpdateSpecies(mode))}
    >
      {shouldDisplayLoaderBeforeRedirect ? (
        <SubmittingLoader mode={mode} />
      ) : null}
      <div className="flex flex-col md:flex-row">
        <Controller<SpeciesToUpdate, "file">
          control={control}
          name="file"
          rules={{ required: mode === "creation" }}
          render={({ field: { value, onChange, ...field } }) => (
            <div className="md:w-2/5 sm:w-full">
              <FileInput
                name={field.name}
                onChange={onChange}
                defaultUrl={defaultValues?.seed_image}
                currentFile={value}
                error={!!errors.file}
              />
            </div>
          )}
        />
        <div className="flex flex-col bg-white shadow-md rounded px-8 pt-3 md:pt-6 pb-8 mb-4">
          <Input
            id="name"
            {...register("name", { required: true })}
            type="string"
            label="Nom"
            placeholder="Entrer un nom ici"
            error={!!errors.name}
          />
          <TextArea
            {...register("description", { required: true })}
            label="Description"
            id="description"
            placeholder="..."
            error={!!errors.description}
          />
          <Select
            {...register("zone", { required: true })}
            type="select"
            label="Zone"
            placeholder="Sélectionner une zone  "
            id="zone"
            options={[
              { id: "zone1", value: "Zone1" },
              { id: "zone2", value: "Zone2" },
              { id: "zone3", value: "Zone3" },
            ]}
            error={!!errors.zone}
          />
          <div className="mt-6">
            <Button type="submit" expand>
              {defaultValues ? "Mettre à jour" : "Créer"}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};
