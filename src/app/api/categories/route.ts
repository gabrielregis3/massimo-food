import { NextResponse } from "next/server";

export const GET = () => {
    return new NextResponse("foda", { status: 200 });
}