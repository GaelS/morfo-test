import { NextRequest, NextResponse } from "next/server";
import { speciesUseCase } from "../useCases/species";

export async function POST(req: NextRequest) {
  try {
    const speciesToCreate = await req.json();
    const result = await speciesUseCase.createSpecies(speciesToCreate);
    return NextResponse.json({ created: result }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const speciesToUpdate = await req.json();
    const result = await speciesUseCase.updateSpecies(speciesToUpdate);
    return NextResponse.json({ updated: result }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
