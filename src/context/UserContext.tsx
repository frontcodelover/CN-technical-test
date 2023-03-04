import { createContext, useState } from 'react';
import { adminUser } from '../../data/dataUser';

interface IUserContext {
  children: React.ReactNode;
}

type User = {
  username: string;
  password: string;
};

export type UserContextType = {
  user: User | null;
  login: (username: string, password: string) => void;
  logout: () => void;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const UserProvider = ({ children }: IUserContext) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const login = (username: string, password: string) => {
    if (username === adminUser.username && password === adminUser.password) {
      setCurrentUser(adminUser);
    } else {
      setCurrentUser(null);
    }
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const userContextValue = {
    user: currentUser,
    login,
    logout,
  };

  return <UserContext.Provider value={userContextValue}>{children}</UserContext.Provider>;
};
