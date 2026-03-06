<template>
  <main class="colecoes-view">
    <div class="content">
      <h2>Sua Coleção</h2>
      <div v-if="jogosDaColecao.length === 0" class="empty-state">
        <p>Você ainda não tem jogos na sua coleção.</p>
        <button class="primary-btn" @click="$emit('navigate', 'home')">Explorar Jogos</button>
      </div>
      <div v-else class="games-grid">
        <GameCard v-for="game in jogosDaColecao" :key="game.id" :game="game" />
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import api from '../Service/api';
import GameCard from '../components/GameCard.vue';
import { userStore } from '../store.js';

const jogosDaColecao = ref([]);

defineEmits(['navigate']);

onMounted(async () => {
  try {
    const res = await api.listarColecao(userStore.id);
    jogosDaColecao.value = res.data;
  } catch (err) {
    console.error("Erro ao carregar biblioteca", err);
  }
});
</script>

<style scoped>
.colecoes-view {
  padding: 4rem 5%;
  min-height: calc(100vh - 80px); /* Adjust based on navbar height */
}

.content h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid var(--ps-blue, #00439c);
  padding-bottom: 10px;
  display: inline-block;
}

.empty-state {
  text-align: center;
  margin-top: 4rem;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
}

.empty-state p {
  font-size: 1.2rem;
  color: #ccc;
  margin-bottom: 1.5rem;
}

.primary-btn {
  background-color: var(--ps-blue, #00439c);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 20px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.primary-btn:hover {
  background-color: #0056c7;
  transform: scale(1.05);
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 2rem;
  justify-items: center;
}
</style>
