import React, { useCallback, useState } from "react";
import {
  CssBaseline,
  TextField,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import "./App.css";
import { Provider } from "react-redux";
import { AppbarComponent, MenuComponent, SidebarComponent } from "./components";
import { BLOTTER, MAIN, ROUTES, TRADETICKET } from "./routes";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Blotter, Dashboard, TradeTicket } from "./features";
import { store } from "./store";

export const App: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const [themeMode, setThemeMode] = useState<"light" | "dark">("dark");
  const [sidebarToggle, setSidebarToggle] = useState<boolean>(false);

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
    typography: {
      fontSize: 14,
    },
  });

  const handleDrawerToggle = useCallback(() => {
    //toggle drawer here
    setSidebarToggle(!sidebarToggle);
  }, [sidebarToggle]);

  const onThemeChange = useCallback(() => {
    setThemeMode(themeMode === "dark" ? "light" : "dark");
  }, [themeMode]);

  const menuClickHandler = useCallback(
    (link: string) => {
      navigate(link);
      setSidebarToggle(!sidebarToggle);
    },
    [navigate, sidebarToggle]
  );

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppbarComponent
          handleDrawerToggle={handleDrawerToggle}
          onThemeChange={onThemeChange}
          isDarkMode={themeMode === "dark"}
          isDrawerOpen={sidebarToggle}
        />
        <SidebarComponent
          isOpen={sidebarToggle}
          handleDrawerToggle={handleDrawerToggle}
          children={
            <MenuComponent links={ROUTES} menuClickHandler={menuClickHandler} />
          }
        />
        <Routes>
          <Route path={MAIN} element={<Dashboard />} />
          <Route path={BLOTTER} element={<Blotter />} />
          <Route path={TRADETICKET} element={<TradeTicket />} />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
};
