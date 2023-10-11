import {
  SpeciesRepository,
  SpeciesToUpdate,
} from "@/domain/species/repository";
import { dbClient } from "../../../clients/database";
import { generateSpeciesService } from "@/domain/species/service";
import { Species } from "@/domain/species/type";

const speciesRepository: SpeciesRepository = {
  findById: (id: string) => dbClient.species.findUnique({ where: { id } }),
  findAll: () => dbClient.species.findMany({ orderBy: { created_at: "desc" } }),
  create: async (speciesToCreate: Species) => {
    return dbClient.species.create({
      data: speciesToCreate,
    });
  },
  update: (species: SpeciesToUpdate) => {
    return dbClient.species.update({
      where: {
        id: species.id,
      },
      data: species,
    });
  },
  delete: async (id: string) => {
    await dbClient.species.delete({ where: { id } });
  },
};

export const speciesUseCase = generateSpeciesService(speciesRepository);
