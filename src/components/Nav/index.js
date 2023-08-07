import React from 'react'
import { AppBar, Toolbar, IconButton, Box, Button } from '@mui/material';
import SiteLogo from '../../assets/images/EquitasX_logo.png'
import styles from './nav.module.css'

const Nav = () => {

  const menuItems = ["Falcon9",
                     "Falcon Heavy",
                     "Dragon",
                     "Starship",
                     "Fair Hiring",
                     "Hire Danish"]

  return (
    <>
      <AppBar position='static' sx={{ bgcolor: 'black' }}>
        <Toolbar>
          <IconButton size='small' >
            <img className={styles.nav_logo}
              src={SiteLogo}
              alt="equitas_logo"
              aria-label="logo"
            />
          </IconButton>
          <Box sx={{ display: { xs: 'none', md: 'flex', justifyContent: 'space-between'}}}>
            {menuItems.map((item) => (
              <Button
                key={item}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Nav
