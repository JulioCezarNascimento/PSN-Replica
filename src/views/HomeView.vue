<template>
  <main v-if="mainGame">
    <MainBanner :mainData="mainGame" />
    <div class="content">
      <GameRow title="Novidades" :games="jogosNovos" />
      <GameRow title="Mais Vendidos" :games="jogosMaisVendidos" />
    </div>
  </main>
</template>

<script setup>
import api from '../Service/api';
import MainBanner from '../components/MainBanner.vue';
import GameRow from '../components/GameRow.vue';
import { mainGame } from '../data/mockData.js';
import { onBeforeMount, ref } from 'vue';

const jogosNovos = ref([]);
const jogosMaisVendidos = ref([]);

onBeforeMount(async () => {
  try {
    const response = await api.listarJogos();
    jogosNovos.value = response.data.maisNovos;
    jogosMaisVendidos.value = response.data.maisVendidos;
  } catch (error) {
    console.error('Erro ao buscar jogos:', error);
  }
});
</script>

<style scoped>
.content { margin-top: -120px; position: relative; z-index: 5; padding-bottom: 50px; }
</style>
