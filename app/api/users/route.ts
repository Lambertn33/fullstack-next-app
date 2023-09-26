import { generateSuccessMessage } from "@/lib/helpers/responses";
import { UserInterface } from "@/interfaces/users.interface";
import { NextRequest } from "next/server";
import { getUsers } from "@/lib/helpers/users";

export async function GET() {
  const jsonData = getUsers();
  let users: UserInterface[] = JSON.parse(jsonData);
  return generateSuccessMessage({ users }, 200);
}

export async function POST(request: NextRequest) {

}
