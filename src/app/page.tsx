import { AddSpeciesLink } from "@/components/AddSpeciesLink";
import { NoSpeciesFoundFallback } from "@/components/NoSpeciesFoundFallback";
import { SpeciesList } from "@/components/SpeciesList";
import { speciesUseCase } from "./api/useCases/species";
import { PageTitle } from "@/design-system/PageTitle";

/**
 * All-in to prevent nextjs caching
 */
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Home() {
  const speciesList = await speciesUseCase.getAllSpecies();
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
