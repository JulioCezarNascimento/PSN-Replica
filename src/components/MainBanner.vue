<template>
  <div class="main-banner" :style="{ backgroundImage: `url(${mainData.image})` }">
    <div class="main-content">
      <h1>{{ mainData.title }}</h1>
      <p>{{ mainData.description }}</p>
      <span class="price">{{ mainData.price }}</span>
      <div class="actions">
        <button class="btn-primary">Comprar Agora</button>
        <button class="btn-secondary">Adicionar à Lista</button>
      </div>
    </div>
    <div class="fade-bottom"></div>
  </div>
</template>

<script setup>
defineProps(['mainData']);
</script>

<style scoped>
.main-banner {
  height: 80vh;
  background-size: cover;
  background-position: center top;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 0 5%;
}
.main-content {
  position: relative;
  z-index: 2;
  margin-bottom: 10rem;
  max-width: 600px;
}
.main-content h1 { font-size: 3.5rem; margin: 0; }
.price { display: block; font-size: 1.5rem; margin: 1rem 0; color: #ffcc00; }
.actions { display: flex; gap: 1rem; }
button { padding: 0.8rem 2rem; border-radius: 50px; border: none; font-weight: bold; cursor: pointer; }
.btn-primary { background: white; color: black; }
.btn-secondary { background: rgba(255,255,255,0.2); color: white; backdrop-filter: blur(10px); }
.fade-bottom {
  position: absolute;
  bottom: 0; left: 0; width: 100%; height: 60%;
  background: linear-gradient(to top, #121212 10%, transparent 100%);
}
</style>