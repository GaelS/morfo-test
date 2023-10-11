import { speciesUseCase } from "@/app/api/useCases/species";
import { SpeciesForm } from "@/components/SpeciesForm";
import { PageTitle } from "@/design-system/PageTitle";
async function getData(id: string) {
  const data = await speciesUseCase.getSpecies(id);
  if (!data) {
    throw new Error("Failed to fetch data");
  }

  return data;
}

export default async function Edit({ params }: { params: { id: string } }) {
  const species = await getData(params.id);
  return (
    <>
      <PageTitle showBackLink>Mettre à jour une espèce</PageTitle>
      <SpeciesForm defaultValues={species} />;
    </>
  );
}
