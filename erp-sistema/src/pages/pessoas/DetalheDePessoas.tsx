/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { FerramentasDeDetathe } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layout";
import { PessoaService } from "../../shared/services/api/pessoas/PessoasService";
import { Box, Grid, Paper } from "@mui/material";
import { Form } from "@unform/web";
import { VTextfield } from "../../shared/forms";
import { FormHandles } from "@unform/core";

interface IFormData {
  email: string;
  nomeCompleto: string;
  cidadeId: number;
}

export const DetalheDePessoas: React.FC = () => {
  const { id = "nova" } = useParams<"id">();

  const formRef = useRef<FormHandles>(null);
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
          aoClicarEmSalvar={() => formRef.current?.submitForm()}
          aoClicarEmSalvarEFechar={() => formRef.current?.submitForm()}
          aoClicarEmApagar={() => handleDelete(Number(id))}
          aoCliarEmNovo={() => navigate("/pessoas/detalhe/nova")}
          aoCLicarEmVoltar={() => navigate("/pessoas")}
        />
      }
    >
      <Form ref={formRef} onSubmit={handleSave}>
        <Box
          margin={1}
          display="flex"
          flexDirection="row"
          component={Paper}
          variant="outlined"
        >
          <Grid container direction="row" padding={2} spacing={2} >
            <Grid container item direction="row" spacing={2}>
              <Grid item>
                <VTextfield placeholder="Nome completo" name="nomeCompleto" />
              </Grid>
              <Grid item>
                <VTextfield placeholder="Email" name="email" />
              </Grid>
              <Grid item>
                <VTextfield placeholder="cidade" name="cidadeId" />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Form>
    </LayoutBaseDePagina>
  );
};
