import { UploadRepository } from "@/domain/upload/repository";
import { generateUploadService } from "@/domain/upload/service";
import { uploadBucket, supabaseClient } from "@/clients/supabase";

const uploadRepository: UploadRepository = {
  uploadFile: async (file: File): Promise<string> => {
    await supabaseClient.storage.from(uploadBucket).upload(file.name, file, {
      cacheControl: "3600",
      upsert: true,
    });
    return supabaseClient.storage.from(uploadBucket).getPublicUrl(file.name)
      .data.publicUrl;
  },
};

export const UploadService = generateUploadService(uploadRepository);
