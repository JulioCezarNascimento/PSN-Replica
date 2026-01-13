<template>
  <div class="game-row">
    <h2>{{ title }}</h2>
    <div class="scroller">
      <GameCard v-for="game in games" :key="game.id" :game="game" />
    </div>
  </div>
</template>

<script setup>
import GameCard from './GameCard.vue';
defineProps(['title', 'games']);
</script>

<style scoped>
.game-row { margin: 2rem 0 2rem 5%; }
.scroller { display: flex; gap: 20px; overflow-x: auto; padding: 20px 0; scrollbar-width: none; }
.scroller::-webkit-scrollbar { display: none; }
h2 { font-size: 1.5rem; }
</style>