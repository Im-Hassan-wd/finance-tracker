import { createContext, useEffect, useReducer } from "react";
import { projectAuth } from "../firebase/config";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsready: false,
  });

  useEffect(() => {
    const unsub = projectAuth.onAuthStateChanged(() => {
      dispatch({ type: "AUTH_IS_READY", payload: user });
    });
    unsub();
  }, []);

  console.log("Authcontext state:", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
