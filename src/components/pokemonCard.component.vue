<template>
  <NCard class="pokemon-card">
    <img :src="pokemon.imageUrl" :alt="pokemon.name" />
    <h3>{{ pokemon.name }}</h3>
    <NTag>{{ pokemon.type }}</NTag>
    <p>Life Points: {{ pokemon.lifePoints }}</p>
    <p>Height: {{ pokemon.height }} m</p>
    <p>Weight: {{ pokemon.weight }} kg</p>
  </NCard>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import { NCard, NTag } from 'naive-ui';

interface Pokemon {
  id: number;
  name: string;
  pokedexId: number;
  type: string;
  imageUrl: string;
  lifePoints: number;
  attackId: number;
  height: number;
  weight: number;
}

export default defineComponent({
  name: 'PokemonCard',
  components: {
    NCard,
    NTag
  },
  props: {
    pokemon: {
      type: Object as PropType<Pokemon>,
      required: true
    }
  }
});
</script>

<style scoped>
.pokemon-card {
  text-align: center;
}
.pokemon-card img {
  max-width: 100%;
  height: auto;
}
</style>
