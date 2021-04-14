import axios from "axios";

const api = {
  criadorCadastrar: axios.create({
    baseURL: "http://localhost:3000/criador/cadastrar";
  }),
  criadorLogin: axios.create({
    baseURL: "http://localhost:3000/criador/login";
  }),
  recrutadorCadastrar: axios.create({
    baseURL: "http://localhost:3000/recrutador/cadastrar";
  }),
  recrutadorLogin: axios.create({
    baseURL: "http://localhost:3000/recrutador/login";
  }),
}

export default api;
