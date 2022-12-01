import {
  Avatar,
  Divider,
  Drawer,
  List,
  useTheme,
  useMediaQuery,
  ListItemText,
  ListItemIcon,
  Icon,
  ListItemButton,
} from "@mui/material";
import { Box } from "@mui/system";

import { useAppThemeContext, useDrawerContext } from "../../../contexts";
import { SubMenu } from "./SubMenu";
import { SubMenuWithChildren } from "./SubMenuWithChildren";

interface IMenuLateralProps {
  children: React.ReactNode;
}

export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();
  const {toggleTheme} = useAppThemeContext()
  return (
    <>
      <Drawer
        open={isDrawerOpen}
        variant={smDown ? "temporary" : "permanent"}
        onClose={toggleDrawerOpen}
      >
        <Box
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Box
            width="100%"
            height={theme.spacing(20)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              src="../../../../logo192.png"
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
            />
          </Box>
          <Divider />
          <Box flex={1}>
            <List component="nav">
              <SubMenu
                icon="home"
                label="Pagina Inicial"
                to="/pagina-inicial"
                onClick={smDown ? toggleDrawerOpen : undefined}
              />
               <SubMenu
                icon="home"
                label="Pessoas"
                to="/pessoas"
                onClick={smDown ? toggleDrawerOpen : undefined}
              />

              <SubMenuWithChildren
                label="Comercial"
                icon="home"
                to="/Comercial"
                haveLabelOneChildren
                onClick={smDown ? toggleDrawerOpen : undefined}
                labelChildrenOne="Pessoas"
              />
              <SubMenuWithChildren
                label="Produto"
                icon="home"
                to="/estoque"
                haveLabelTwoChildren
                onClick={smDown ? toggleDrawerOpen : undefined}
                labelChildrenOne="Estoque"
                labelChildrenTwo="Grupo"
              />

              <SubMenuWithChildren
                label="Produto"
                icon="home"
                to="/estoque"
                haveLabelThreeChildren
                onClick={smDown ? toggleDrawerOpen : undefined}
                labelChildrenOne="Estoque"
                labelChildrenTwo="Grupo"
                labelChildrenThree="Controle"

              />
            </List>
            
          </Box>
          <Box>
            <List>
              <ListItemButton onClick={toggleTheme}>
                <ListItemIcon>
                  <Icon>dark_mode</Icon>
                </ListItemIcon>
                <ListItemText primary="Alternar tema"/>
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};
