import { Button, Divider, Icon, Paper, useTheme } from "@mui/material";
import { Box } from "@mui/system";

export const FerramentasDeDetathe: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      height={theme.spacing(5)}
      marginX={1}
      padding={1}
      paddingX={2}
      display="flex"
      gap={1}
      justifyContent="end"
    
      component={Paper}
    >
   
      <Button
          variant="contained"
          color="primary"
          disableElevation
      
          endIcon={<Icon>save</Icon>}
        >
      Salvar
        </Button>
        <Button
          variant="contained"
          color="primary"
          disableElevation
      
          endIcon={<Icon>save</Icon>}
        >
      Salvar e Voltar
        </Button>
        <Button
          variant="contained"
          color="primary"
          disableElevation
      
          endIcon={<Icon>delete</Icon>}
        >
    Apagar
        </Button>
        
        <Button
          variant="contained"
          color="primary"
          disableElevation
      
          endIcon={<Icon>add</Icon>}
        >
      Novo
        </Button>
        <Divider orientation="vertical"/>
        <Button
          variant="contained"
          color="primary"
          disableElevation
      
          endIcon={<Icon>arrow_back</Icon>}
        >
      Voltar
        </Button>
    
    </Box>
  );
};
