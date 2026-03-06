<template>
  <div class="game-card">
    <div class="img-wrapper">
      <img :src="game.image" :alt="game.title">
    </div>
    <p class="title">{{ game.title }}</p>
    <button class="add-btn" @click.stop="adicionar(game.id)">➕ Adicionar à Coleção</button>
  </div>
</template>

<script setup>
import api from '../Service/api';
import { userStore } from '../store.js';

const props = defineProps(['game']);

const adicionar = async (id) => {
  try {
    await api.adicionarJogoColecao(userStore.id, id);
    alert('Jogo adicionado à coleção!');
  } catch (err) {
    console.error('Erro ao adicionar jogo', err);
    alert('Erro ao adicionar jogo à coleção.');
  }
};
</script>

<style scoped>
.game-card { width: 180px; flex-shrink: 0; cursor: pointer; transition: 0.3s; }
.game-card:hover { transform: scale(1.05); }
.img-wrapper { width: 180px; height: 240px; border-radius: 15px; overflow: hidden; margin-bottom: 10px; }
img { width: 100%; height: 100%; object-fit: cover; }
.title { margin: 0 0 8px 0; font-size: 0.9rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color: white; }
.add-btn {
  background-color: var(--ps-blue, #00439c);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 6px;
  font-size: 0.8rem;
  width: 100%;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;
}
.add-btn:hover {
  background-color: #0056c7;
  transform: scale(1.02);
}
</style>