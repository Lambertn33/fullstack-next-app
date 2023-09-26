import {
  generateErrorMessage,
  generateSuccessMessage,
} from "@/lib/helpers/responses";
import { UserInterface } from "@/interfaces/users.interface";
import { getUsers, createUser } from "@/lib/helpers/users";

// get users
export async function GET() {
  const users: UserInterface[] = getUsers();
  return generateSuccessMessage({ users }, 200);
}

// create user
export async function POST(req: Request) {
  const { username, firstname, lastname } = await req.json();
  const newUser: UserInterface = {
    id: (Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000).toString(),
    username,
    firstname,
    lastname,
  };
  try {
    createUser(newUser);
    return generateSuccessMessage(
      { message: "user created successfully" },
      201
    );
  } catch (error) {
    return generateErrorMessage({ message: "error in creating new user" }, 500);
  }
}
