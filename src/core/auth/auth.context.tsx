import React from 'react';
import { UserSession, createEmptyUserSession } from './auth.vm';

interface Context extends UserSession {
  setUserSession: (userSession: UserSession) => void;
}

let noUserLogin: 'no user login';

export const AuthContext = React.createContext<Context>({
  userName: noUserLogin,
  setUserSession: () =>
    console.warn('If you area reading this, likely you forgot to add '),
});

export const AuthProvider: React.FC = ({ children }) => {
  const [userSession, setUserSession] = React.useState<UserSession>(
    createEmptyUserSession()
  );

  return (
    <AuthContext.Provider
      value={{ userName: userSession.userName, setUserSession }}
    >
      {children}
    </AuthContext.Provider>
  );
};
