import React, {createContext, useCotext , useReducer} from 'react';

// prepare the data layer
export const DataLayerContext = createContext();

export const DataLayer =({initialState, reducer, children}) => (
   <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
       {children}
   </DataLayerContext.Provider>
);



