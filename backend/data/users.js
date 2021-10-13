import bcrypt from "bcryptjs";
const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Muhammad Arslan",
    email: "arslan@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Muhammad Ahmad",
    email: "ahmad@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
