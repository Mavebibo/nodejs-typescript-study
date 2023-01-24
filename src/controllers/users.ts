import { Request, Response } from "express";
import * as userService from "../services/users";
import { User } from "../models/user";

export const getUsers = (_: Request, response: Response) => {
  const users: User[] = userService.getUsers();
  if (users && users.length > 0) {
    return response.status(200).json(users);
  }
  return response.status(400).json({ message: "Users not found" });
};

export const getUser = (request: Request, response: Response) => {
  const { userId } = request.params;
  const user: User | undefined = userService.getUser(parseInt(userId, 10));
  if (user) {
    return response.status(200).json(user);
  }
  return response.status(400).json({ message: "User not found" });
};

export const createUser = (request: Request, response: Response) => {
  const userToCreate: User = request.body;

  const users = userService.createUser(userToCreate);

  const userCreated = users.find(
    (user: User) =>
      user.name === userToCreate.name &&
      user.lastName === userToCreate.lastName &&
      user.phone === userToCreate.phone
  );
  if (userCreated) {
    return response.status(200).json(userCreated);
  }
  return response.status(400).json({ message: "User not created" });
};

export const updateUser = (request: Request, response: Response) => {
  const userToUpdate: User = request.body;
  const users: User[] = userService.updateUser(userToUpdate);
  if (users && users.length > 0) {
    return response.status(200).json(users);
  }
  return response.status(400).json({ message: "Lol can't" });
};

export const deleteUser = (request: Request, response: Response) => {
  const { userId } = request.params;
  const users: User[] = userService.deleteUser(parseInt(userId));
  return response.json(users);
};
