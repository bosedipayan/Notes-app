import React from 'react';
import SwipeDrawer from './SwipeDrawer';
import Notes from './notes/Notes';
import { Box } from '@mui/material';
import DeleteNotes from './delete/DeleteNotes';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Note } from '@mui/icons-material';


const Home = () => {
  return (
    <Box style={{ display: 'flex', width: '100%'}}>
      <BrowserRouter>
        <SwipeDrawer />
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/delete" element={<DeleteNotes />} />
        </Routes>
      </BrowserRouter>
    </Box>
  )
}

export default Home