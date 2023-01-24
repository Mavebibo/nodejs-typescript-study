import { Request, Response } from "express";
import { User } from "../models/user";

let users: User[] = [
  {
    name: "Macrelino",
    lastName: "Borgas",
    phone: 232233,
    id: 1,
  },
  {
    name: "Marcelino",
    lastName: "Borges",
    phone: 233232,
    id: 2,
  },
];

export const getUsers = () => {
  return users;
};

export const getUser = (id: number) => {
  return users.find((user: User) => user.id === id);
};

export const createUser = (user: User) => {
  users.push({
    ...user,
    id: Date.now(),
  });
  return users;
};

export const updateUser = (user: User) => {
  return users.map((eUser: User) => {
    if (eUser.id === user.id) {
      return user;
    }
    return eUser;
  });
};

export const deleteUser = (id: number) => {
  return users.filter((eUser: User) => eUser.id !== id);
};
