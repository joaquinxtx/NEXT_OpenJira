import React, { FC } from 'react'
import { Card, CardActionArea, CardContent, Typography,CardActions } from '@mui/material';

import { Entry } from '../../interfaces/entry';

interface Props{
  entry:Entry;
}

export const EntryCard:FC<Props> = ({entry}) => {
  return (
    <Card sx={{marginBottom:1}}>

      <CardActionArea>
        <CardContent>
          <Typography sx={{whiteSpace:'pre-line'}}>{entry.description} </Typography>
        </CardContent>
        <CardActions sx={{display:'flex' ,justifyContent:'end' , paddingTigth:2}} >
          <Typography variant='body2'>hace 30 min</Typography>
        </CardActions>
      </CardActionArea>

    </Card>
  )
}

