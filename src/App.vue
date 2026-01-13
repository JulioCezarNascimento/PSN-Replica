<template>
  <div class="ps-app">
    <NavBar />
    <main v-if="mainGame">
      <MainBanner :mainData="mainGame" />
      <div class="content">
        <GameRow title="Novidades" :games="jogosNovos" />
        <GameRow title="Mais Vendidos" :games="jogosMaisVendidos" />
      </div>
    </main>
  </div>
</template>

<script setup>
import axios from 'axios';
import NavBar from './components/NavBar.vue';
import MainBanner from './components/MainBanner.vue';
import GameRow from './components/GameRow.vue';
import { mainGame} from './data/mockData.js';
import { onBeforeMount, ref } from 'vue';

const jogosNovos = ref([]);
const jogosMaisVendidos = ref([]);
onBeforeMount(async () => {
  const response = await axios.get('http://localhost:8080/api/jogos');
  console.log(response.data);
  jogosNovos.value = response.data.maisNovos;
  jogosMaisVendidos.value = response.data.maisVendidos;
})

</script>

<style>
.ps-app { background-color: #121212; color: white; min-height: 100vh; font-family: sans-serif; }
.content { margin-top: -120px; position: relative; z-index: 5; padding-bottom: 50px; }
body { margin: 0; background: #121212; }
</style>