import React, { useEffect, useState } from "react";

export const userContext = React.createContext();

export const ContextController = ({ children }) => {

  const initialState = {
    shows : [],
    favourites : [],
  };

  const [state, setState] = useState(initialState);

  useEffect(() => {
    async function fetchShows() {
      try {
        const res = await fetch(
          "https://api.tvmaze.com/shows"
        );
        const json = await res.json();
    
        setState({
          ...state,
          shows: json,
        });
      } catch (err) {
        console.log(err);
      }
    }
    fetchShows();
  }, []);

  return (
    <userContext.Provider value={[state, setState]}>
      {children}
    </userContext.Provider>
  );
};
