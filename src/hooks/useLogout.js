import { useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsPending(true);

    // sign user out
    try {
      await projectAuth.signOut();

      // dispatch logout sction
      dispatch({ type: "LOGOUT" });

      setIsPending(false);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.log(err.message);
      setIsPending(false);
    }
  };

  return { logout, error, isPending };
};
