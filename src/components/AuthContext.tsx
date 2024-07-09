import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import supabase from '../lib/supabase';
import {Session} from '@supabase/supabase-js';

type AuthContextType = {
  user: Session | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [user, setUser] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({data: {session}}) => {
      setUser(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session);
    });
  }, []);

  const signIn = async (email: string, password: string) => {
    const {error} = await supabase.auth.signInWithPassword({email, password});
    if (error) throw error;
  };

  const signOut = async () => {
    const {error} = await supabase.auth.signOut();
    if (error) throw error;
  };

  return (
    <AuthContext.Provider value={{user, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
