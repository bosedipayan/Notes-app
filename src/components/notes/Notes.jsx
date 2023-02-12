import React, {useContext, useState} from 'react'
import { Box, Grid } from '@mui/material'
import { styled } from '@mui/material/styles';
import Form from './Form';
import Note from './Note';

import { reorder } from '../../utils/common-utils';

import { DataContext } from '../../context/DataProvider';
import EmptyNotes from './EmptyNotes';
import { DragDropContext, Draggable, Droppable  } from 'react-beautiful-dnd';

const DrawerHeader = styled('div')(({ theme }) => ({
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


const Notes = () => {

  const { notes, setNotes } = useContext(DataContext)

  const [notesPerPage, setNotesPerPage] = useState(6);

  const onDragEnd = (result) => {
        if (!result.destination) {
          return;
        }

        const items = reorder(
          notes,
          result.source.index,
          result.destination.index
          );
              
        setNotes(items);
    }

  return (
    <Box sx={{display: 'flex' }}>
        <Box component="main" sx={{ flexGrow: 1, p: 3}}>
            <DrawerHeader />
            <Form />

            { notes.length > 0 && notes.length < 7 ? 
              <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId="droppable">
                            {(provided, snapshot) => (
                                <Grid container style={{ marginTop: 16}}
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                >
                                {
                                    notes.map((note, index) => (
                                        <Draggable key={note.id} draggableId={note.id} index={index}>
                                            {(provided, snapshot) => (
                                                <Grid ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    item
                                                >
                                                    <Note note={note} />
                                                </Grid>
                                            )}
                                        </Draggable>
                                    ))
                                }
                                </Grid>
                            )}
                        </Droppable>
                    </DragDropContext>
              :  notes.length >= 7 ? alert('Notes are limited to 6') :  <EmptyNotes /> }
        </Box>
    </Box>
  )
}

export default Notes