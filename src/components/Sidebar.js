import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';

import Drawer from '@mui/material/Drawer';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import NotificationAddRoundedIcon from '@mui/icons-material/NotificationAddRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { Avatar, IconButton } from '@mui/material';

import profile from "../assets/Profile.jpeg"

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
   
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      
    },
  }));

const drawerWidth = 80;
function Sidebar() {
    const [selectedMenu, setSelectedMenu] = React.useState("Home")

    const navigate = useNavigate();
    const handleClickMenu = (menu) => {
        navigate(menu.path);
        setSelectedMenu(menu.title)
    }

    console.log("selectedMenu", selectedMenu);

    const drawer = (
        <div>

            <ListItemButton>
                <ListItemIcon>
                    <GridViewRoundedIcon className='dashboardLogo' />
                </ListItemIcon>

            </ListItemButton>

            <List>
                {[
                    { title: "Home", path: "/", icon: <HomeIcon className={selectedMenu === "Home" ? "selectedMenu" : ""} /> },
                    { title: "Contact", path: "contact", icon: <PhoneRoundedIcon className={selectedMenu === "Contact" ? "selectedMenu" : ""} /> }
                ].map((menu, index) => (

                    <ListItem
                        key={menu.title}
                        onClick={() => handleClickMenu(menu)}
                        className={selectedMenu === menu.title ? "activeLink" : ""}
                    >
                        <ListItemButton
                        >
                            <ListItemIcon >
                                {menu.icon}
                            </ListItemIcon>

                        </ListItemButton>

                    </ListItem>

                ))}
            </List>

        </div>
    );


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: `calc(100% - ${drawerWidth}px)`,
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    
                    
                   
                }}
            >
                <Toolbar className='toolbar'>
                   
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Box className="toolbarRightChild">

                       
                            <MailIcon className="toolbarIcon"/>
                            <SettingsIcon className="toolbarIcon"/>
                            <NotificationAddRoundedIcon className="toolbarIcon"/>
                            <Avatar sx={{ width: 40, height: 40 }} alt="Remy Sharp" src={profile} />
                        
                    </Box>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: drawerWidth, flexShrink: 0 }}
                aria-label="mailbox folders"
            >
                <Drawer
                    variant="permanent"

                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, width: `calc(100% - ${drawerWidth}px)` }}
            >
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
}



export default Sidebar;
