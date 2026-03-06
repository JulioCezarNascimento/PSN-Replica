<template>
  <div class="game-form-container">
    <div class="form-card">
      <h2>Inserir Novo Jogo</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="title">Título</label>
          <input type="text" id="title" v-model="game.title" required placeholder="Ex: God of War Ragnarök" />
        </div>

        <div class="form-group">
          <label for="description">Descrição</label>
          <textarea id="description" v-model="game.description" required placeholder="Descrição do jogo..."></textarea>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="price">Preço (R$)</label>
            <input type="number" id="price" v-model.number="game.price" step="0.01" required placeholder="0.00" />
          </div>

          <div class="form-group">
            <label for="categoria">Categoria</label>
            <select id="categoria" v-model="game.categoria" required>
              <option value="" disabled>Selecione uma categoria</option>
              <option v-for="cat in categorias" :key="cat.id" :value="cat">
                {{ cat.name }}
              </option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label for="image">URL da Imagem</label>
          <input type="text" id="image" v-model="game.image" required placeholder="https://exemplo.com/imagem.jpg" />
        </div>

        <div class="image-preview" v-if="game.image">
          <img :src="game.image" alt="Preview" @error="handleImageError" />
        </div>

        <div class="form-actions">
          <button type="button" class="btn-secondary" @click="goBack">Cancelar</button>
          <button type="submit" class="btn-primary" :disabled="submitting">
            {{ submitting ? 'Enviando...' : 'Cadastrar Jogo' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import api from '../Service/api';

const emit = defineEmits(['cancel', 'success']);
const submitting = ref(false);

const game = ref({
  title: '',
  description: '',
  image: '',
  price: null,
  categoria: null
});

const categorias = ref([]);

onMounted(async () => {
  try {
    const response = await api.listarCategorias();
    categorias.value = response.data;
  } catch (error) {
    console.error('Erro ao carregar categorias:', error);
    // Mock data if API fails for demo purposes
    categorias.value = [
      { id: 1, name: 'Ação' },
      { id: 2, name: 'Aventura' },
      { id: 3, name: 'RPG' }
    ];
  }
});

const handleSubmit = async () => {
  submitting.value = true;
  try {
    await api.criarJogo(game.value);
    alert('Jogo cadastrado com sucesso!');
    emit('cancel'); // Go back to home
  } catch (error) {
    console.error('Erro ao cadastrar jogo:', error);
    alert('Erro ao cadastrar jogo. Tente novamente.');
  } finally {
    submitting.value = false;
  }
};

const goBack = () => {
  emit('cancel');
};

const handleImageError = (e) => {
  e.target.style.display = 'none';
};
</script>

<style scoped>
.game-form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 100px);
  padding: 20px;
  background-color: var(--ps-bg);
}

.form-card {
  background-color: var(--ps-bg-secondary);
  padding: 40px;
  border-radius: 12px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

h2 {
  color: var(--ps-text);
  margin-bottom: 30px;
  font-weight: 300;
  text-align: center;
  font-size: 2rem;
}

.form-group {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

label {
  color: var(--ps-text-muted);
  margin-bottom: 8px;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

input, textarea, select {
  background-color: #2a2a2a;
  border: 1px solid #444;
  border-radius: 4px;
  padding: 12px;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
}

input:focus, textarea:focus, select:focus {
  outline: none;
  border-color: var(--ps-blue);
  box-shadow: 0 0 0 2px rgba(0, 112, 209, 0.3);
  background-color: #333;
}

textarea {
  min-height: 120px;
  resize: vertical;
}

.image-preview {
  margin-top: 20px;
  border-radius: 8px;
  overflow: hidden;
  max-height: 200px;
  border: 1px solid #444;
}

.image-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  margin-top: 30px;
}

.btn-primary {
  background-color: var(--ps-blue);
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.btn-primary:hover:not(:disabled) {
  background-color: #0081f1;
  transform: scale(1.05);
  box-shadow: 0 0 15px rgba(0, 112, 209, 0.5);
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-secondary {
  background-color: transparent;
  color: var(--ps-text);
  border: 1px solid #555;
  padding: 12px 30px;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  border-color: #888;
  background-color: rgba(255, 255, 255, 0.05);
}

@media (max-width: 600px) {
  .form-row {
    grid-template-columns: 1fr;
  }
  .form-card {
    padding: 20px;
  }
}
</style>
