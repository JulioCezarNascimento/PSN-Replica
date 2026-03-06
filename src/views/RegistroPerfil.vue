<script setup>
import { ref } from 'vue';
import api from '../Service/api';

const emit = defineEmits(['navigate']);

const form = ref({
  username: '',
  email: '',
  password: ''
});

const feedback = ref({ message: '', type: '' });

const registrar = async () => {
  try {
    await api.criarUsuario(form.value);
    feedback.value = { message: 'Perfil criado com sucesso! Redirecionando...', type: 'success' };
    
    // Pequeno delay para o usuário ler a mensagem de sucesso
    setTimeout(() => {
      emit('navigate', 'perfil');
    }, 2000);
  } catch (error) {
    feedback.value = { message: 'Erro ao criar perfil. Verifique os dados ou se o e-mail/usuário já existe.', type: 'error' };
  }
};
</script>

<template>
  <div class="registro-container">
    <div class="card-registro">
      <h2>Criar Novo Perfil</h2>
      
      <form @submit.prevent="registrar">
        <div class="field">
          <label>Nome de Usuário</label>
          <input v-model="form.username" type="text" placeholder="Ex: JulioDev" required>
        </div>

        <div class="field">
          <label>E-mail</label>
          <input v-model="form.email" type="email" placeholder="seu@email.com" required>
        </div>

        <div class="field">
          <label>Senha</label>
          <input v-model="form.password" type="password" placeholder="********" required>
        </div>

        <button type="submit" class="btn-registrar">Finalizar Cadastro</button>
      </form>

      <p v-if="feedback.message" :class="['msg', feedback.type]">
        {{ feedback.message }}
      </p>
    </div>
  </div>
</template>

<style scoped>
/* Tema Dark Green */
.registro-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}
.card-registro {
  background: #121212;
  padding: 2.5rem;
  border-radius: 12px;
  border: 1px solid #006400; /* Verde Escuro */
  width: 100%;
  max-width: 400px;
}
h2 { color: #00ff00; margin-bottom: 0.5rem; }
.field { margin-bottom: 1.2rem; display: flex; flex-direction: column; }
label { color: #ccc; margin-bottom: 0.5rem; font-size: 0.9rem; }
input {
  background: #1e1e1e;
  border: 1px solid #333;
  padding: 0.8rem;
  color: white;
  border-radius: 4px;
}
input:focus { border-color: #006400; outline: none; }
.btn-registrar {
  background: #006400; /* */
  color: white;
  border: none;
  padding: 1rem;
  width: 100%;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}
.btn-registrar:hover { background: #008000; }
.msg { margin-top: 1rem; text-align: center; font-weight: bold; }
.success { color: #00ff00; }
.error { color: #ff4444; }
</style>
