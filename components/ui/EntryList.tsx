import React, { FC, useMemo } from 'react'
import { Box,Paper,List} from '@mui/material';
import { EntryCard } from './';
import { EntryStatus } from '../../interfaces';
import { useContext } from 'react';
import { EntriesContext } from '../../context/entries/EntriesContext';

interface Props{
  status:EntryStatus
}

export const EntryList:FC<Props> = ({status}) => {

  const {entries} = useContext(EntriesContext);

  const entriesByStatus = useMemo ( ()=> entries.filter( entry=>entry.status===status ) , [entries] ) 

  return (
    //TODO: aqui haremos drop
    <div>
        
        <Paper sx={{height:'calc(100vh - 200px)',overflow:'scroll',padding:'5px 10px' ,backgroundColor:'transparent'}}>

            {/* //cambiara si esto hace drag o no  */}
            <List>
              {
                entriesByStatus.map(entry=>(
                  <EntryCard key={entry._id} entry={entry} />

                ))
              }
               
                
               
            </List>

        </Paper>

    </div>
  )
}