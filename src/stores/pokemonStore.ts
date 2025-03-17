import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import axios from 'axios';
import type { Pokemon } from '../types/pokemonTypes';

export const usePokemonStore = defineStore('pokemon', () => {
  const pokemons = ref<Pokemon[]>([]);
  const searchQuery = ref('');

  const fetchPokemons = async () => {
    try {
      const response = await axios.get('https://pokemon-api-seyrinian-production.up.railway.app/pokemon-cards');
      pokemons.value = response.data;
      pokemons.value.forEach((elt) => {
        console.log(elt);
      })
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
    }
  };

  const filteredPokemons = computed(() => {
    return pokemons.value.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });

  return {
    pokemons,
    searchQuery,
    fetchPokemons,
    filteredPokemons
  };
});
