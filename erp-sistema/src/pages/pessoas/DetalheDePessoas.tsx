/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FerramentasDeDetathe } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layout";
import { PessoaService } from "../../shared/services/api/pessoas/PessoasService";
import { LinearProgress, TextField } from "@mui/material";
import { Form } from "@unform/web";
import {VTextfield} from '../../shared/forms'

export const DetalheDePessoas: React.FC = () => {
  const { id = "nova" } = useParams<"id">();
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
          console.log(result);
        }
      });
    }
  }, [id]);

  const handleSave = () => {
    console.log("save");
  };
  const handleDelete = (id: number) => {
    console.log('chegou')
    if (confirm("Realmente deseja apagar?")) {
      PessoaService.deleteById(id)
      .then((result) => {
        if (result instanceof Error) {
          alert(result.message);
        } else {
       
          alert("Registe apagado com sucesso");
          navigate('/pessoas')
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
          aoClicarEmSalvar={handleSave}
          aoClicarEmSalvarEFechar={handleSave}
          aoClicarEmApagar={()=> handleDelete(Number(id))}
          aoCliarEmNovo={() => navigate("/pessoas/detalhe/nova")}
          aoCLicarEmVoltar={() => navigate("/pessoas")}
        />
      }
    >
        <Form onSubmit={console.log}>
                <VTextfield name="nomeCompleto"/>
        </Form>
    
    </LayoutBaseDePagina>
  );
};
