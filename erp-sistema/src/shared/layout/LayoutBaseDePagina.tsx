import { IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { ArrowRightOutlined ,ArrowLeft} from '@mui/icons-material';
import { useDrawerContext } from "../contexts";
import { ReactNode } from "react";


interface ILayoutBaseDePaginaProps {
  children: React.ReactNode;
  titulo: string;
  barraDeFerramenta?: ReactNode;
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaProps> = ({
  children,
  titulo,
  barraDeFerramenta
}) => {

    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    const {toggleDrawerOpen}= useDrawerContext()

  
    
  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box display="flex" alignItems="center" padding={1} height={theme.spacing(12)} gap={1}>
        {smDown && (
            <IconButton onClick={toggleDrawerOpen}>
            <ArrowRightOutlined/>
            </IconButton>
        )}
        <Typography variant="h5"
        whiteSpace="nowrap">
        {titulo}
        </Typography>
        
        </Box>
     {barraDeFerramenta && (
       <Box>{barraDeFerramenta}</Box>
     )}
      <Box flex={1} overflow="auto">{children}</Box>
    </Box>
  );
};
