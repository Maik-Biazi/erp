import { Enviroment } from "../../environment";
import { Api } from "../api/axios-config";

interface IListagemPessoa {
  id: number;
  nomeCompleto: string;
  cidadeId: number;
  email: string;
}
interface IDetalhePessoa {
  id: number;
  nomeCompleto: string;
  cidadeId: number;
  email: string;
}

type IPessoaComTotalCount = {
  data: IListagemPessoa[];
  totalCount: number;
};

const getAll = async (page = 1, filter = ""): Promise<IPessoaComTotalCount | Error> => {
  try {
    const urlRelativa = `/pessoas?_page=${page}&_limit=${Enviroment.LIMITE_DE_LINHAS}&nomeCompleto_like=${filter}`;
    const { data,headers } = await Api.get(urlRelativa);
    if (data) {
      return {
        data,
        totalCount:Number(headers['x-total-count'] || Enviroment.LIMITE_DE_LINHAS),
      };
    }
    return new Error('Erro ao listar os registros')
  } catch (error) {
    console.error(error)
    return new Error((error as {message:string}).message || 'Erro ao listar os registros')
  }
};

const getById = async (): Promise<any> => {};

const create = async (): Promise<any> => {};

const updateById = async (): Promise<any> => {};

const deleteById = async (): Promise<any> => {};

export const PessoaService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
