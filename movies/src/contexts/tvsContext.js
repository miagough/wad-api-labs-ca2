import React, { useState } from "react";

export const TvsContext = React.createContext(null);

const TvsContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) 


  const addToFavorites = (tv) => {
    let newFavorites = [];
    if (!favorites.includes(tv.id)){
      newFavorites = [...favorites, tv.id];
    }
    else{
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites)
  };

  // We will use this function in a later section
  const removeFromFavorites = (tv) => {
    setFavorites( favorites.filter(
      (mId) => mId !== tv.id
    ) )
  };
  const addReview = (tv, review) => {
    setMyReviews( {...myReviews, [tv.id]: review } )
  };
  //console.log(myReviews);


  return (
    <TvsContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        addReview,
      }}
    >
      {props.children}
    </TvsContext.Provider>
  );

};

export default TvsContextProvider;