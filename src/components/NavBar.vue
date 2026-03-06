<template>
  <nav class="navbar">
    <div class="nav-left">
      <span class="store-icon" @click="$emit('navigate', 'home')" style="cursor: pointer">🛍️ PS Store</span>
    </div>
    <div class="nav-center">
      <ul>
        <li :class="{ active: currentPage === 'home' }" @click="$emit('navigate', 'home')">Novidades</li>
        <li :class="{ active: currentPage === 'new-game' }" @click="$emit('navigate', 'new-game')">Novo Jogo</li>
        <li :class="{ active: currentPage === 'colecoes' }" @click="$emit('navigate', 'colecoes')">Coleções</li>
        <li :class="{ active: currentPage === 'perfil' }" @click="$emit('navigate', 'perfil')">Meu Perfil</li>
        <li>Ofertas</li>
        <li>Assinaturas</li>
      </ul>
    </div>
    <div class="nav-right">
      <span>🔍</span>
      <span>🛒</span>
      <span class="profile-icon" title="Registrar / Login" @click="$emit('navigate', 'registro')">👤</span>
    </div>
  </nav>
</template>

<script setup>
defineProps({
  currentPage: {
    type: String,
    default: 'home'
  }
});
defineEmits(['navigate']);
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  background: rgba(18, 18, 18, 0.8); 
  backdrop-filter: blur(10px); 
  position: sticky;
  top: 0;
  z-index: 100;

  .nav-center ul {
    display: flex;
    list-style: none;
    gap: 2rem;
    margin: 0;
    padding: 0;

    li {
      font-weight: 600;
      color: var(--ps-text-muted);
      cursor: pointer;
      padding-bottom: 5px;
      border-bottom: 3px solid transparent;

      &:hover {
         color: var(--ps-text);
      }

      &.active {
        color: var(--ps-text);
        border-bottom-color: var(--ps-blue);
      }
    }
  }

  .nav-right {
    display: flex;
    gap: 1.5rem;
    font-size: 1.2rem;
    cursor: pointer;
  }
}
</style>