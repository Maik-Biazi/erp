import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {useState} from 'react'
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";

interface IListItemLinkProps {
  label: string;
  icon: string;
  to: string;
  labelChildrenOne?:string
  onClick: (() => void) | undefined;
}

export const SubMenuWithChildren: React.FC<IListItemLinkProps> = ({
  label,
  icon,
  onClick,
  to,
  labelChildrenOne
}) => {
  const [open, setOpen] = useState(true);

  const navigate = useNavigate();

  const resolvedPath = useResolvedPath(to);

  const match = useMatch({ path: resolvedPath.pathname, end: false });

  const handleClick = () => {
    navigate(to);
    onClick?.();
  };
  const handleClickOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <ListItemButton selected= {!!match} onClick={handleClickOpen}>
        <ListItemIcon>
            <Icon>{icon}</Icon>
        </ListItemIcon>
        <ListItemText primary={label}/>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick={handleClick}>
           
            <ListItemText primary={labelChildrenOne} />
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
};
