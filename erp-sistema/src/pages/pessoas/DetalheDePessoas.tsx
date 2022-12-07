/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { FerramentasDeDetathe } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layout";
import { PessoaService } from "../../shared/services/api/pessoas/PessoasService";
import { LinearProgress, TextField } from "@mui/material";
import { Form } from "@unform/web";
import {VTextfield} from '../../shared/forms'
import { FormHandles } from "@unform/core";


interface IFormData{
  email:string;
  nomeCompleto: string;
  cidadeId:number;
}




export const DetalheDePessoas: React.FC = () => {
  const { id = "nova" } = useParams<"id">();

  const formRef = useRef<FormHandles>(null)
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
          formRef.current?.setData(result)
        }
      });
    }

  }, [id]);

  const handleSave = (dados:IFormData) => {
    setIsLoading(true)
    if(id === 'nova'){
      PessoaService.create(dados)
      .then((result)=>{
        setIsLoading(false)
       if(result instanceof Error){
        alert(result.message)
       }else{
        navigate(`/pessoas/detalhe/${result}`)
       }

      })
    }else{
      PessoaService.updateById(Number(id),{id:Number(id),...dados})
      .then((result)=>{
        setIsLoading(false)
       if(result instanceof Error){
        alert(result.message)
       }

      })

    }

    console.log(dados);
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
          aoClicarEmSalvar={()=> formRef.current?.submitForm()}
          aoClicarEmSalvarEFechar={()=> formRef.current?.submitForm()}
          aoClicarEmApagar={()=> handleDelete(Number(id))}
          aoCliarEmNovo={() => navigate("/pessoas/detalhe/nova")}
          aoCLicarEmVoltar={() => navigate("/pessoas")}
        />
      }
    >
        <Form ref={formRef} onSubmit={handleSave}>
                <VTextfield placeholder="Nome completo" name="nomeCompleto"/>
                <VTextfield placeholder="Email" name="email"/>
                <VTextfield placeholder="cidade" name="cidadeId"/>
              <button type="submit">Enviar</button>
        </Form>
    
    </LayoutBaseDePagina>
  );
};
