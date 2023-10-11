export interface UploadRepository {
  uploadFile: (file: File) => Promise<string>;
}
