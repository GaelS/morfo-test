const BASE_URL = "/api/upload";

export const uploadUseCase = {
  upload: async (file: File): Promise<string> => {
    const data = new FormData();
    data.set("file", file);
    const result = await fetch(BASE_URL, {
      method: "POST",
      body: data,
    });

    const { publicUrl } = await result.json();
    return publicUrl;
  },
};
