import axios from "axios";

const api = {
  criadorCadastrar: {
    baseURL: "http://localhost:3000/criador/cadastrar";
  },
  criadorLogin: {
    baseURL: "http://localhost:3000/criador/login";
  },
  recrutadorCadastrar: {
    baseURL: "http://localhost:3000/recrutador/cadastrar";
  },
  recrutadorLogin: {
    baseURL: "http://localhost:3000/recrutador/login";
  },
}

export default api;
