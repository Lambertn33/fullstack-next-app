import {
  generateErrorMessage,
  generateSuccessMessage,
} from "@/lib/helpers/responses";
import { getUser, updateUser, deleteUser } from "@/lib/helpers/users";
import { UserInterface } from "@/interfaces/users.interface";

export async function PUT(req: Request, context: { params: { id: string } }) {
  const userId = context.params.id;
  const oldUser = getUser(userId)!;
  if (!oldUser) return generateErrorMessage({ message: "user not found" }, 404);

  const { firstname, lastname } = await req.json();
  const updatedUser: UserInterface = {
    id: userId,
    username: oldUser.username,
    firstname,
    lastname,
  };
  try {
    updateUser(userId, updatedUser);
    return generateSuccessMessage(
      { message: "user updated successfully" },
      200
    );
  } catch (error) {
    return generateErrorMessage({ message: "error in updating user" }, 500);
  }
}

export async function DELETE(_: Request, context: { params: { id: string } }) {
  const userId = context.params.id;
  const oldUser = getUser(userId)!;
  if (!oldUser) return generateErrorMessage({ message: "user not found" }, 404);

  try {
    deleteUser(userId);
    return generateSuccessMessage(
      { message: "user deleted successfully" },
      200
    );
  } catch (error) {
    return generateErrorMessage({ message: "error in deleting user" }, 500);
  }
}
