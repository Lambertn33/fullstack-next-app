import { NextResponse } from "next/server";

export const generateSuccessMessage = (data: any, status: number) => {
  return NextResponse.json(
    { message: "Success", ...data },
    { status, statusText: "OK" }
  );
};
