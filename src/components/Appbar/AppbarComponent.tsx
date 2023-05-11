import React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Switch as ThemeSwitch,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

interface Props {
  handleDrawerToggle: () => void;
  onThemeChange: () => void;
  isDarkMode: boolean;
  isDrawerOpen: boolean;
}

export const AppbarComponent: React.FC<Props> = ({
  handleDrawerToggle,
  onThemeChange,
  isDarkMode,
  isDrawerOpen,
}): JSX.Element => {
  return (
    <>
      <AppBar position="static" variant="elevation" className="appbar-wrapper">
        <Toolbar variant="dense">
          <IconButton
            color="inherit"
            onClick={handleDrawerToggle}
            edge="start"
            sx={{ mr: 2, ...(isDrawerOpen && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="subtitle1" component="div" sx={{ flex: 1 }}>
            React Repo Trading App
          </Typography>
          {isDarkMode ? <DarkModeIcon /> : null}
          <ThemeSwitch size="small" onChange={onThemeChange} color="default" />
          {!isDarkMode ? <LightModeIcon /> : null}
        </Toolbar>
      </AppBar>
    </>
  );
};
