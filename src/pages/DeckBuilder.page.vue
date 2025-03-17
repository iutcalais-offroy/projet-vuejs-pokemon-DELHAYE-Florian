<template>
  <div class="deck-builder">
    <input v-model="searchQuery" placeholder="Search for a Pokemon" class="search-bar" />
    <div class="pokemon-list">
      <PokemonCard v-for="pokemon in filteredPokemons" :key="pokemon.id" :pokemon="pokemon" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { usePokemonStore } from '../stores/pokemonStore';
import PokemonCard from '../components/pokemonCard.component.vue';

const { pokemons, searchQuery, fetchPokemons, filteredPokemons } = usePokemonStore();

onMounted(() => {
  fetchPokemons();
});
</script>

<style scoped>
.deck-builder {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
  box-sizing: border-box;
}

.search-bar {
  width: 100%;
  max-width: 400px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.pokemon-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
</style>