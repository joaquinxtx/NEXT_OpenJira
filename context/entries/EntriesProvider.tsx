import { useReducer } from 'react';
import { EntriesContext, entriesReducer } from './';
import { v4 as uuidv4 } from 'uuid';
import { Entry } from '../../interfaces/';



export interface EntriesState {
  entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [
    {
    _id:uuidv4(),
    description:'Pendiente: lorem fsafs fasafsfa  fghthd gewg ',
    status:'pennding',
    createAt:Date.now()
  },
  {
    _id:uuidv4(),
    description:'In-Progress: lorem fsafs fasafsfa  fghthd gewg ',
    status:'in-progress',
    createAt:Date.now()-10000000
  },
  {
    _id:uuidv4(),
    description:'Finished: lorem fsafs fasafsfa  fghthd gewg ',
    status:'finished',
    createAt:Date.now()-1357888
  }
],
};

type Props = {
  children?: React.ReactNode;
};

export const EntriesProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);
  const addNewEntry = (description:string)=>{
    const newEntry:Entry={
      _id: uuidv4(),
      description,
      createAt: Date.now(),
      status: 'pennding'
    }

    dispatch({type:'[Entry] Add-Entry',payload:newEntry})
  }

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        //methods
        addNewEntry,

      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};