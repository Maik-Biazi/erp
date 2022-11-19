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
  labelChildrenTwo?:string
  labelChildrenThree?:string

  haveLabelOneChildren?:boolean;
  haveLabelTwoChildren?:boolean;
  haveLabelThreeChildren?:boolean;

  onClick: (() => void) | undefined;
}

export const SubMenuWithChildren: React.FC<IListItemLinkProps> = ({
  label,
  icon,
  onClick,
  to,
  labelChildrenOne,
  labelChildrenTwo,
  labelChildrenThree,
  haveLabelOneChildren =false,
  haveLabelTwoChildren=false,
  haveLabelThreeChildren=false,
  
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

      {haveLabelOneChildren && <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick={handleClick}>
           
            <ListItemText primary={labelChildrenOne} />
          </ListItemButton>
        </List>
      </Collapse>}


      {haveLabelTwoChildren && <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick={handleClick}>
           
            <ListItemText primary={labelChildrenOne} />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }} onClick={handleClick}>
           
            <ListItemText primary={labelChildrenTwo} />
          </ListItemButton>
        </List>
      </Collapse>}


      {haveLabelThreeChildren && <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick={handleClick}>
           
            <ListItemText primary={labelChildrenOne} />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }} onClick={handleClick}>
           
            <ListItemText primary={labelChildrenTwo} />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }} onClick={handleClick}>
           
            <ListItemText primary={labelChildrenThree} />
          </ListItemButton>
        </List>
      </Collapse>}

      
    </>
  );
};
