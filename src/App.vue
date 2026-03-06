<template>
  <div class="ps-app">
    <NavBar :currentPage="currentPage" @navigate="handleNavigation" />
    
    <div v-if="currentPage === 'home'">
      <HomeView />
    </div>
    
    <div v-if="currentPage === 'new-game'">
      <GameForm @cancel="currentPage = 'home'" />
    </div>

    <div v-if="currentPage === 'colecoes'">
      <ColecoesView @navigate="handleNavigation" />
    </div>

    <div v-if="currentPage === 'registro'">
      <RegistroPerfil @navigate="handleNavigation" />
    </div>

    <div v-if="currentPage === 'perfil'">
      <PerfilUsuario @navigate="handleNavigation" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import NavBar from './components/NavBar.vue';
import HomeView from './views/HomeView.vue';
import GameForm from './components/GameForm.vue';
import ColecoesView from './views/ColecoesView.vue';
import RegistroPerfil from './views/RegistroPerfil.vue';
import PerfilUsuario from './views/PerfilUsuario.vue';

const currentPage = ref('home');

// Listen for path changes (to support manual URL changes or initial load)
onMounted(() => {
  const path = window.location.pathname;
  if (path === '/admin/jogos/novo') {
    currentPage.value = 'new-game';
  } else if (path === '/colecoes') {
    currentPage.value = 'colecoes';
  } else if (path === '/registro') {
    currentPage.value = 'registro';
  } else if (path === '/perfil') {
    currentPage.value = 'perfil';
  }
});

const handleNavigation = (page) => {
  currentPage.value = page;
  if (page === 'home') {
    window.history.pushState({}, '', '/');
  } else if (page === 'new-game') {
    window.history.pushState({}, '', '/admin/jogos/novo');
  } else if (page === 'colecoes') {
    window.history.pushState({}, '', '/colecoes');
  } else if (page === 'registro') {
    window.history.pushState({}, '', '/registro');
  } else if (page === 'perfil') {
    window.history.pushState({}, '', '/perfil');
  }
};

// Handle browser back/forward
window.addEventListener('popstate', () => {
  const path = window.location.pathname;
  if (path === '/admin/jogos/novo') {
    currentPage.value = 'new-game';
  } else if (path === '/colecoes') {
    currentPage.value = 'colecoes';
  } else if (path === '/registro') {
    currentPage.value = 'registro';
  } else if (path === '/perfil') {
    currentPage.value = 'perfil';
  } else {
    currentPage.value = 'home';
  }
});
</script>

<style>
.ps-app { background-color: #121212; color: white; min-height: 100vh; font-family: sans-serif; }
body { margin: 0; background: #121212; }
</style>