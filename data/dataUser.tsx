interface IUser {
  username: string;
  password: string;
  role?: string;
}

export const adminUser: IUser = {
  username: 'admin',
  password: 'password',
  role: 'admin',
};
