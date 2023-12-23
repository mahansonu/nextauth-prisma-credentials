import bcrypt from "bcrypt";
export const hashPassword = async (password) => {
  return bcrypt.hash(password, 10).then((hash) => hash);
};

export const isPasswordSame = async (unhashpwd, hashpwd) => {
  return bcrypt.compare(unhashpwd, hashpwd).then((res) => res);
};
