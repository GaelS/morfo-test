import { SpeciesRepository, SpeciesToUpdate } from "./repository";
import { Species } from "./type";

export interface SpeciesService {
  getSpecies(id: string): Promise<Species | null>;
  getAllSpecies(): Promise<Species[]>;
  createSpecies(species: Species): Promise<Species>;
  updateSpecies(species: SpeciesToUpdate): Promise<Species>;
  deleteSpecies(id: string): Promise<void>;
}

export function generateSpeciesService(
  repository: SpeciesRepository
): SpeciesService {
  return {
    async getSpecies(id: string): Promise<Species | null> {
      return repository.findById(id);
    },

    async getAllSpecies(): Promise<Species[]> {
      return repository.findAll();
    },

    async createSpecies(species: Species): Promise<Species> {
      return repository.create(species);
    },
    async updateSpecies(species: SpeciesToUpdate): Promise<Species> {
      return repository.update(species);
    },

    async deleteSpecies(id: string): Promise<void> {
      return repository.delete(id);
    },
  };
}
