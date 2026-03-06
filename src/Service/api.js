import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/'
});

export default {
  // Envia um objeto JSON para o Spring
  criarJogo(jogo) {
    return api.post('/jogos', jogo);
  },

  // Envia o ID na URL (ex: /jogos/5)
  deletarJogo(id) {
    return api.delete(`/jogos/${id}`);
  },

  // Busca todas as categorias
  listarCategorias() {
    return api.get('/categorias');
  },

  // Busca todos os jogos (organizados por categorias na Home)
  listarJogos() {
    return api.get('/api/jogos');
  },

  // Busca a coleção do usuário
  listarColecao(usuarioId) {
    return api.get(`/usuarios/${usuarioId}/colecao`);
  },

  // Adiciona um jogo à coleção do usuário
  adicionarJogoColecao(usuarioId, jogoId) {
    return api.post(`/usuarios/${usuarioId}/colecao/${jogoId}`);
  },

  // Criar novo usuário
  criarUsuario(usuario) {
    return api.post('/api/usuarios', usuario);
  }
};