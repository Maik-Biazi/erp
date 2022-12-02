import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { FerramentasDaListagem } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layout";
import { PessoaService } from "../../shared/services/api/pessoas/PessoasService";
import { useDebounce } from "../../shared/hooks";

export const ListagemDePessoas: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { debounce } = useDebounce(2000,false);
  const busca = useMemo(() => {
    return searchParams.get("busca") || "";
  }, [searchParams]);

  useEffect(() => {

    debounce(() => {
      PessoaService.getAll(1, busca)
      .then((result) => {
        if (result instanceof Error) {
          alert(result.message);
          return;
        } else {
          console.log(result);
        }
      });
    });

  }, [busca,debounce]);

  return (
    <LayoutBaseDePagina
      titulo="Listagem de Pessoas"
      barraDeFerramentas={
        <FerramentasDaListagem
          textoBotaoNovo="Nova"
          mostrarInputBusca
          textoDaBusca={busca}
          aoMudarTextoDeBusca={(texto) =>
            setSearchParams({ busca: texto }, { replace: true })
          }
        />
      } >

      </LayoutBaseDePagina>
  );
};
