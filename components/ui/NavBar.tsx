import { useContext } from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import { UIContext } from '../../context/ui/';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';


export const NavBar = () => {

  const {openSideMenu} = useContext(UIContext)

  return (
    <AppBar position='sticky' >
        <Toolbar>
            <IconButton
            size='large'
            edge='start'
            onClick={openSideMenu}>
                <MenuOpenIcon  />
            </IconButton>
        <Typography variant='h6'>OpenJira</Typography>
        </Toolbar>

    </AppBar>
  )
}
