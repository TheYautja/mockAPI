import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
});

export const listaUsers = async () => {
    try {
        const resposta = await api.get("/users");
        return resposta.data;
    } catch(error) {
        console.error("erro na listagem", error);
    }
}

export const criarUser = async (dadosUser) => {
    try{
        const resposta = await api.post("/users",dadosUser);
        return resposta.data;
    } catch(error) {
        console.error("erro no cadastro",error);
    }
}

export const updateUser = async (id, dadosUser) => {
    try {
        const resposta = await api.put(`/users/${id}`, dadosUser);
        return resposta.data;
    } catch (error) {
        console.error("erro no update", error);
    }
}

export const fimUser = async (id) => {
    try {
        const resposta = await api.delete(`/users/${id}`);
        return resposta.data;
    } catch(error) {
        console.error("erro ao deletar", error);
    }
}