<script setup>
import { ref, onMounted, computed } from 'vue';
import api from '../Service/api';
import { userStore } from '../store.js';

const colecao = ref([]);

const totalGasto = computed(() => {
  return colecao.value.reduce((acc, jogo) => acc + (jogo.price || 0), 0).toFixed(2);
});

onMounted(async () => {
  try {
    const res = await api.listarColecao(userStore.id);
    colecao.value = res.data;
  } catch (error) {
    console.error('Error fetching collection:', error);
  }
});

</script>

<template>
  <div class="profile-view">
    <header class="user-info">
      <h1>Perfil de {{ userStore.username }}</h1>
      <div class="stats-row">
        <div class="stat">
          <span>Jogos</span>
          <strong>{{ colecao.length }}</strong>
        </div>
        <div class="stat">
          <span>Valor da Biblioteca</span>
          <strong>R$ {{ totalGasto }}</strong>
        </div>
      </div>
    </header>

    <section class="library">
      <h2>Minha Biblioteca</h2>
      <div class="game-grid">
        <div v-for="jogo in colecao" :key="jogo.id" class="game-card">
          <img :src="jogo.image" :alt="jogo.title">
          <p>{{ jogo.title }}</p>
          <span v-if="jogo.title.includes('Skyrim')" class="tag">Open World Clássico</span>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.profile-view {
  padding: 4rem 5%;
  min-height: calc(100vh - 80px);
}
.user-info {
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 3rem;
  border: 1px solid var(--ps-blue, #00439c);
}
.user-info h1 {
  margin-top: 0;
  color: #fff;
  border-bottom: 2px solid var(--ps-blue, #00439c);
  padding-bottom: 0.5rem;
  display: inline-block;
}
.stats-row {
  display: flex;
  gap: 3rem;
  margin-top: 1.5rem;
}
.stat {
  display: flex;
  flex-direction: column;
}
.stat span {
  font-size: 0.9rem;
  color: #aaa;
}
.stat strong {
  font-size: 1.5rem;
  color: #00ff00;
}
.library h2 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}
.game-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 2rem;
  justify-items: center;
}
.game-card {
  width: 180px;
  background: #1e1e1e;
  border-radius: 12px;
  overflow: hidden;
  text-align: center;
  transition: transform 0.3s;
  position: relative;
}
.game-card:hover {
  transform: scale(1.05);
}
.game-card img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
.game-card p {
  padding: 10px;
  margin: 0;
  color: white;
  font-size: 0.9rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tag {
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(0, 67, 156, 0.9);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: bold;
}
</style>
