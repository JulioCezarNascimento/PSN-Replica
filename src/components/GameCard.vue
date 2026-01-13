<template>
  <div class="game-card">
    <div class="img-wrapper">
      <img :src="game.image" :alt="game.title">
    </div>
    <p>{{ game.title }}</p>
  </div>
</template>

<script setup>
defineProps(['game']);
</script>

<style scoped>
.game-card { width: 180px; flex-shrink: 0; cursor: pointer; transition: 0.3s; }
.game-card:hover { transform: scale(1.05); }
.img-wrapper { width: 180px; height: 240px; border-radius: 15px; overflow: hidden; margin-bottom: 10px; }
img { width: 100%; height: 100%; object-fit: cover; }
p { margin: 0; font-size: 0.9rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
</style>