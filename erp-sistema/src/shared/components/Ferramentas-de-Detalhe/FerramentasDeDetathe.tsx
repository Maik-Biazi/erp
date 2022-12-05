import { Button, Divider, Icon, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
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
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  

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
        onClick={aoClicarEmSalvar}
        endIcon={<Icon>save</Icon>}
      >
        <Typography variant="button" whiteSpace="nowrap" textOverflow='ellipsis' overflow="hidden">
        Salvar
        </Typography>
        
      </Button>
      )}
      

      {mostrarBotaoSalvarEFechar && (
        <Button
        variant="contained"
        color="primary"
        disableElevation
        onClick={aoClicarEmSalvarEFechar}
        endIcon={<Icon>save</Icon>}
      >
         <Typography variant="button" whiteSpace="nowrap" textOverflow='ellipsis' overflow="hidden">
        Salvar e Fechar
        </Typography>
      </Button>
      )}


      {mostrarBotaoApagar && (
        <Button
        variant="contained"
        color="primary"
        disableElevation
        onClick={aoClicarEmApagar}
        endIcon={<Icon>delete</Icon>}

      >
         <Typography variant="button" whiteSpace="nowrap" textOverflow='ellipsis' overflow="hidden">
        Apagar
        </Typography>
      </Button>
      )}

      {mostrarBotaoNovo && (
        <Button
        variant="contained"
        color="primary"
        disableElevation
        onClick={aoCliarEmNovo}
        endIcon={<Icon>add</Icon>}
      >
          <Typography variant="button" whiteSpace="nowrap" textOverflow='ellipsis' overflow="hidden">
          {textoBotaoNovo}
        </Typography>
        
      </Button>
      )}
      <Divider orientation="vertical" />
      {mostrarBotaoVoltar &&(
        <Button
        variant="contained"
        color="primary"
        disableElevation
        onClick={aoCLicarEmVoltar}
        endIcon={<Icon>arrow_back</Icon>}
      >
        <Typography variant="button" whiteSpace="nowrap" textOverflow='ellipsis' overflow="hidden">
          Voltar
        </Typography>
      </Button>
      )}
    </Box>
  );
};
