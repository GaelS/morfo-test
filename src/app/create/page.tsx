import { SpeciesForm } from "@/components/SpeciesForm";
import { PageTitle } from "@/design-system/PageTitle";

export default async function Create() {
  return (
    <>
      <PageTitle showBackLink>Référencer une espèce</PageTitle>
      <SpeciesForm />;
    </>
  );
}
