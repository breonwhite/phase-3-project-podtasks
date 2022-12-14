import React from 'react'
import { Link } from 'react-router-dom'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import Stack from '@mui/material/Stack';

const Navbar = () => {
    
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <PodcastsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PODTASK
          </Typography>
          <Stack direction="row" spacing={2}>
          <Button color="inherit" component={ Link } to="/podcasts/new">Add Podcast</Button>
          <Button color="inherit" component={ Link } to="/podcasts">Manage Podcasts</Button>
          <Button color="inherit" component={ Link } to="/tasks">All Tasks</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar