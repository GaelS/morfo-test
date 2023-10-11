import { cache } from "react";
import { AddSpeciesLink } from "@/components/AddSpeciesLink";
import { NoSpeciesFoundFallback } from "@/components/NoSpeciesFoundFallback";
import { SpeciesList } from "@/components/SpeciesList";
import { speciesUseCase } from "./api/useCases/species";
import { PageTitle } from "@/design-system/PageTitle";

const getData = async function () {
  const data = await speciesUseCase.getAllSpecies();
  if (!data) {
    throw new Error("Failed to fetch data");
  }

  return data;
};

export default async function Home() {
  const speciesList = await getData();
  return (
    <>
      <PageTitle>Mes espèces</PageTitle>
      <AddSpeciesLink />
      <div className="h-12" />
      {speciesList.length !== 0 ? (
        <SpeciesList speciesList={speciesList} />
      ) : (
        <NoSpeciesFoundFallback />
      )}
    </>
  );
}
