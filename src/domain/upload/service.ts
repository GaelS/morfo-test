import { UploadRepository } from "./repository";

export interface UploadService {
  uploadFile: (file: File) => Promise<string>;
}

export function generateUploadService(
  repository: UploadRepository
): UploadService {
  return {
    async uploadFile(file: File): Promise<string> {
      return repository.uploadFile(file);
    },
  };
}
