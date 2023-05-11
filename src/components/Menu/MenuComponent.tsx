import React from "react";
import { RouteType } from "../../routes";
import { useNavigate } from "react-router-dom";
import { ListItemIcon, ListItemText, MenuItem, MenuList } from "@mui/material";

interface Props {
  links: RouteType[];
  menuClickHandler: (link: string) => void;
}

export const MenuComponent: React.FC<Props> = ({ links, menuClickHandler }): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div>
      <MenuList>
        {links.map((link) => (
          <MenuItem key={link.path} onClick={() => menuClickHandler(link.path)}>
            <ListItemIcon>{<link.icon fontSize="small" />}</ListItemIcon>
            <ListItemText>{link.label}</ListItemText>
          </MenuItem>
        ))}
      </MenuList>
    </div>
  );
};
