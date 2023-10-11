import { Species } from "@/domain/species/type";

const BASE_URL = "/api/species";
const speciesUseCase = {
  create: (species: Species) => {
    return fetch(BASE_URL, {
      method: "POST",
      body: JSON.stringify(species),
    });
  },
  delete: (id: string) => {
    return fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
  },
  update: (species: Species) => {
    return fetch(BASE_URL, {
      method: "PUT",
      body: JSON.stringify(species),
    });
  },
};

export { speciesUseCase };
