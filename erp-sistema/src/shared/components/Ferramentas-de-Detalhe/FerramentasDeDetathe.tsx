import { Button, Divider, Icon, Paper, useTheme } from "@mui/material";
import { Box } from "@mui/system";

interface IFerramentasDeDetatheProps {
  textoBotaoNovo?: string;

  mostrarBotaoNovo?: boolean;
  mostrarBotaoVoltar?: boolean;
  mostrarBotaoApagar?: boolean;
  mostrarBotaoSalvar?: boolean;
  mostrarBotaoSalvarEFechar?: boolean;

  aoCliarEmNovo?: () => void;
  aoCLicarEmVoltar?:() => void;
  aoClicarEmApagar?: () => void;
  aoClicarEmSalvar?:() => void;
  aoClicarEmSalvarEFechar?:() => void;
}

export const FerramentasDeDetathe: React.FC<IFerramentasDeDetatheProps> = ({
  textoBotaoNovo = "Novo",
  mostrarBotaoNovo = true,
  mostrarBotaoVoltar = true,
  mostrarBotaoApagar = true,
  mostrarBotaoSalvar = true,
  mostrarBotaoSalvarEFechar = false,


  aoCliarEmNovo,
  aoCLicarEmVoltar,
  aoClicarEmApagar,
  aoClicarEmSalvar,
  aoClicarEmSalvarEFechar
}) => {
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
      {mostrarBotaoSalvar &&(
        <Button
        variant="contained"
        color="primary"
        disableElevation
        endIcon={<Icon>save</Icon>}
      >
        Salvar
      </Button>
      )}
      

      {mostrarBotaoSalvarEFechar && (
        <Button
        variant="contained"
        color="primary"
        disableElevation
        endIcon={<Icon>save</Icon>}
      >
        Salvar e Voltar
      </Button>
      )}


      {mostrarBotaoApagar && (
        <Button
        variant="contained"
        color="primary"
        disableElevation
        endIcon={<Icon>delete</Icon>}
      >
        Apagar
      </Button>
      )}

      {mostrarBotaoNovo && (
        <Button
        variant="contained"
        color="primary"
        disableElevation
        endIcon={<Icon>add</Icon>}
      >
        {textoBotaoNovo}
      </Button>
      )}
      <Divider orientation="vertical" />
      {mostrarBotaoVoltar &&(
        <Button
        variant="contained"
        color="primary"
        disableElevation
        endIcon={<Icon>arrow_back</Icon>}
      >
        Voltar
      </Button>
      )}
    </Box>
  );
};
