<template>
  <div>
    <input v-model="searchQuery" placeholder="Search for a Pokemon" />
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
.pokemon-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
</style>