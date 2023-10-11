import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";
import { speciesUseCase } from "../../useCases/species";

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await speciesUseCase.deleteSpecies(params.id);
    return NextResponse.json({ deleted: true }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
