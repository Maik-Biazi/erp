/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FerramentasDeDetathe } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layout";
import { PessoaService } from "../../shared/services/api/pessoas/PessoasService";
import { Box, Grid, LinearProgress, Paper } from "@mui/material";
import { VTextfield, VForm, useVForm } from "../../shared/forms";

interface IFormData {
  email: string;
  nomeCompleto: string;
  cidadeId: number;
}

export const DetalheDePessoas: React.FC = () => {
  const { id = "nova" } = useParams<"id">();

  const { formRef, save, saveAndClose, isSaveAndClose } = useVForm();

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (id !== "nova") {
      setIsLoading(true);
      PessoaService.getById(Number(id)).then((result) => {
        setIsLoading(false);

        if (result instanceof Error) {
          alert(result.message);
          navigate("/pessoas");
        } else {
          formRef.current?.setData(result);
        }
      });
    } else {
      formRef.current?.setData({
        email: "",
        cidadeId: "",
        nomeCompleto: "",
      });
    }
  }, [id]);

  const handleSave = (dados: IFormData) => {
    setIsLoading(true);
    if (id === "nova") {
      PessoaService.create(dados).then((result) => {
        setIsLoading(false);
        if (result instanceof Error) {
          alert(result.message);
        } else {
          if(isSaveAndClose()){
            navigate('/pessoas');
          }else
          navigate(`/pessoas/detalhe/${result}`);
        }
      });
    } else {
      PessoaService.updateById(Number(id), { id: Number(id), ...dados }).then(
        (result) => {
          setIsLoading(false);
          if (result instanceof Error) {
            alert(result.message);
          }
          if(isSaveAndClose()){
            navigate('/pessoas');
          }
        }
      );
    }

    console.log(dados);
  };
  const handleDelete = (id: number) => {
    console.log("chegou");
    if (confirm("Realmente deseja apagar?")) {
      PessoaService.deleteById(id).then((result) => {
        if (result instanceof Error) {
          alert(result.message);
        } else {
          alert("Registe apagado com sucesso");
          navigate("/pessoas");
        }
      });
    }
  };

  return (
    <LayoutBaseDePagina
      titulo="Detalhe de pessoa"
      barraDeFerramentas={
        <FerramentasDeDetathe
          textoBotaoNovo="Nova"
          mostrarBotaoSalvarEFechar
          mostrarBotaoApagar={id !== "nova"}
          mostrarBotaoNovo={id !== "nova"}
          aoClicarEmSalvar={save}
          aoClicarEmSalvarEFechar={saveAndClose}
          aoClicarEmApagar={() => handleDelete(Number(id))}
          aoCliarEmNovo={() => navigate("/pessoas/detalhe/nova")}
          aoCLicarEmVoltar={() => navigate("/pessoas")}
        />
      }
    >
      <VForm ref={formRef} onSubmit={handleSave}>
        <Box
          margin={1}
          display="flex"
          flexDirection="row"
          component={Paper}
          variant="outlined"
        >
          {isLoading && (
            <Grid item>
              <LinearProgress variant="indeterminate" />
            </Grid>
          )}

          <Grid container direction="row" padding={2} spacing={2}>
            <Grid container item direction="row" spacing={2}>
              <Grid item xs={5}>
                <VTextfield
                  fullWidth
                  placeholder="Nome completo"
                  name="nomeCompleto"
                />
              </Grid>
              <Grid item xs={5}>
                <VTextfield fullWidth placeholder="Email" name="email" />
              </Grid>
              <Grid item xs={1}>
                <VTextfield fullWidth placeholder="cidade" name="cidadeId" />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </VForm>
    </LayoutBaseDePagina>
  );
};
