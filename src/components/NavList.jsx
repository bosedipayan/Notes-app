import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';


const NavList = ({open}) => {
    const NavList = [
        {id: 1, name: 'Notes', icon: <LightbulbOutlinedIcon />, route: '/' },
        {id:2, name: 'Trash', icon: <DeleteIcon />, route: '/delete' }
    ]
  return (
    <List>
          {
            NavList.map(list => (
            <ListItem button key={list.id}>
              <Link to={list.route} style={{ textDecoration: 'none', display: 'flex',color: 'inherit' }} >
                  <ListItemIcon style={{ alignItems: 'center'}}>
                              {list.icon}
                    </ListItemIcon>
                  <ListItemText primary={list.name} />
              </Link>    
            </ListItem>
          ))}
    </List>
  )
}

export default NavList