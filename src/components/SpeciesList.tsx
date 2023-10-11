"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { speciesUseCase } from "@/useCases/species";
import { Card } from "@/design-system/Card";
import { Species } from "@/domain/species/type";
import { ConfirmDialog } from "./ConfirmDialog";

export const SpeciesList = ({
  speciesList,
}: {
  speciesList: Array<Species>;
}) => {
  const router = useRouter();
  const [selectedIdToDelete, setSelectedId] = React.useState<
    string | undefined
  >(undefined);

  return (
    <>
      <ul className="w-full">
        {speciesList.map((oneSpecies) => (
          <li key={oneSpecies.id}>
            <Card
              id={oneSpecies.id}
              title={oneSpecies.name}
              description={oneSpecies.description}
              imageUrl={oneSpecies.seed_image}
              actions={{
                delete: (id: string) => setSelectedId(id),
              }}
            />
          </li>
        ))}
      </ul>
      <ConfirmDialog
        message="Confirmez-vous la suppression ?"
        onConfirm={() => {
          if (!selectedIdToDelete) {
            return;
          }
          speciesUseCase.delete(selectedIdToDelete).then(() => {
            setSelectedId(undefined);
            router.refresh();
          });
        }}
        onCancel={() => setSelectedId(undefined)}
        isOpen={selectedIdToDelete !== undefined}
      />
    </>
  );
};
