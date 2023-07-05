import { createContext, useState,  } from 'react'

type AuthContextProps = {
  isAuthenticated : boolean,
  signIn: ()=>void,
  logOut: ()=>void
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children } : { children: JSX.Element | JSX.Element[]}) => {
         //Variable, función para actualizar la variable 
  const [ isAuthenticated, setIsAuthenticated ] = useState(false);

  const signIn = () => {
          setIsAuthenticated(true);
  }

  const logOut = () =>{
    setIsAuthenticated(false);
  }

 return (
  <AuthContext.Provider value={
    {
      isAuthenticated,
      signIn,
      logOut
    }
  }>
   { children } 
  </AuthContext.Provider>
 )
}