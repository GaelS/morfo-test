import { Species } from "./type";

export type SpeciesToUpdate = Species & { file?: File };

export interface SpeciesRepository {
  findById(id: string): Promise<Species | null>;
  findAll(): Promise<Species[]>;
  create(species: Species): Promise<Species>;
  update(species: SpeciesToUpdate): Promise<Species>;
  delete(id: string): Promise<void>;
}
