import { Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles'
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteIcon from '@mui/icons-material/Delete';
import PushPinIcon from '@mui/icons-material/PushPin';
import { useContext } from 'react';

import { DataContext } from '../../context/DataProvider';


const StyleCard = styled(Card)`
   width: 240px;
   margin: 8px;
   box-shadow: none;
   border: 2px solid #e0e0e0;
   border-radius: 8px;
   position: relative;
`;

const Text = styled(Typography)`
    font-style: bold;
`


const Note = ({ note }) => {

  const { notes, setNotes, setDeleteNotes } = useContext(DataContext);

  const deleteNote = (note) =>{
    const updatedNotes = notes.filter(data => data.id !== note.id);
    setNotes(updatedNotes);
    setDeleteNotes(prevArr => [note, ...prevArr]);
  }

  const PinnedNote = (note) =>{
    
  }

  return (
    <StyleCard>
        <CardContent>
            <Typography>{note.heading}</Typography>
            <Typography>{note.text}</Typography>
        </CardContent>
        <CardActions>
          <PushPinIcon
            fontSize='small'
            style={{ position: 'absolute', top: '7', right: '8' }}
            onClick={() => PinnedNote(note)}
          />
          <DeleteIcon 
            fontSize='small'
            style={{ marginLeft: 'auto' }} 
            onClick={() => deleteNote(note)}
          />
        </CardActions>
    </StyleCard>
  )
}

export default Note