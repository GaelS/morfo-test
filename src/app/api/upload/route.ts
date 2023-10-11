import { NextRequest, NextResponse } from "next/server";
import { UploadService } from "../useCases/upload";

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();
    const file = data.get("file") as unknown as File;
    const publicUrl = await UploadService.uploadFile(file);
    return NextResponse.json({ publicUrl }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
