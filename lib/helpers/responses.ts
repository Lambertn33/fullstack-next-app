import { NextResponse } from "next/server";

export const generateSuccessMessage = (data: any, status: number) => {
  return generateResponse(data, status, "Success");
};

export const generateErrorMessage = (data: any, status: number) => {
  return generateResponse(data, status, "Error");
};

export const generateResponse = (
  data: any,
  status: number,
  statusText: string
) => {
  return NextResponse.json({ message: statusText, ...data }, { status });
};
