import React, { useState } from 'react'
import { createContext } from 'react'

export const DataContext = createContext(null);


const DataProvider = ({ children }) => {

    const [notes, setNotes] = useState([]);
    const [deleteNotes, setDeleteNotes] = useState([]);

  return (
    <DataContext.Provider value={{
        notes,
        setNotes,
        deleteNotes,
        setDeleteNotes
    }}>
        {children}
    </DataContext.Provider>
  )
}

export default DataProvider