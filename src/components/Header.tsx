import * as React from "react"
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'

const Header = () => {
  return(
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          ListShuffler
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
