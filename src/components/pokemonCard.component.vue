<template>
  <NCard class="pokemon-card">
    <img :src="pokemon.imageUrl" :alt="pokemon.name" />
    <div class="name-pv-type">
        <div class="name">{{ pokemon.name }}</div>
        <div class="pv-type">
            <p class="lifePoints">PV {{ pokemon.lifePoints }}</p>
            <p class="type" :style="{ backgroundColor: typeColor }">{{ pokemon.type.name }}</p>
        </div>
    </div>
    <div class="size">
        <p class="height">Taille: {{ pokemon.height }} m</p>
        <p class="barre">|</p>
        <p class="weight">Poids: {{ pokemon.weight }} kg</p>
    </div>
    <div class="attack">
        <p class="name">{{ pokemon.attack.name }}</p>
        <p class="damages">{{ pokemon.attack.damages }}</p>
    </div>
  </NCard>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import type { PropType } from 'vue';
import { NCard, NTag } from 'naive-ui';
import type { Pokemon } from '../types/pokemonTypes';

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
  },
  setup(props) {
    const typeColor = computed(() => {
      switch (props.pokemon.type.name.toLowerCase()) {
        case 'grass':
          return '#78C850';
        case 'fire':
          return '#F08030';
        case 'water':
          return '#6890F0';
        case 'electric':
          return '#F8D030';
        case 'ice':
          return '#98D8D8';
        case 'fighting':
          return '#C03028';
        case 'poison':
          return '#A040A0';
        case 'ground':
          return '#E0C068';
        case 'flying':
          return '#A890F0';
        case 'psychic':
          return '#F85888';
        case 'bug':
          return '#A8B820';
        case 'rock':
          return '#B8A038';
        case 'ghost':
          return '#705898';
        case 'dragon':
          return '#7038F8';
        case 'dark':
          return '#705848';
        case 'steel':
          return '#B8B8D0';
        case 'fairy':
          return '#EE99AC';
        default:
          return '#A8A878'; 
      }
    });

    return {
      typeColor
    };
  }
});
</script>

<style scoped>

/* Card entière */
.pokemon-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 235px;
  height: auto;
}

/* Img de la card */
.pokemon-card img {
  max-width: 100%;
  height: auto;
}

/* Nom - PV - Type - Size - Attack */
.name-pv-type, .size, .attack {
    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;
    margin: 5px 0;
    justify-content: space-between;
}

/* Elements du nom - pv - type */
.name-pv-type .name, .name-pv-type .lifePoints, .name-pv-type .type {
    margin: 0 4px;
    font-weight: bolder;
}

.name-pv-type .name {
    font-size: 15px;
    text-align: left;
    width: 45%;
    margin: 0;
}

.pv-type {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 55%;
    margin: 0;
}

/* Points de vie du pokémon */
.pokemon-card .lifePoints {
    color: red;
    font-size: 10px;
    font-weight: 500;
    text-align: center;
    margin-right: 5px;
}

/* Type */
.name-pv-type .type {
    padding: 5px 8px;
    border-radius: 15px;
    font-size: 10px;
    font-weight: 500;
    text-align: right;
}

.size .height, .size .weight, .size .barre {
    font-size: 12px;
    font-weight: 400;
    margin: 0 2px;
}

.size .height {
    text-align: left;
    width: 40%;
}

.size .barre {
    text-align: center;
    width: 20%;
}

.size .weight {
    text-align: right;
    width: 40%;
}

.attack {
    display: flex;
    background-color: #ededed;
    padding: 5px;
    border-radius: 5px;
}

.attack .name {
    display: flex;
    justify-content: start;
    font-weight: bold;
    font-size: 12px;
    width: 50%;
}

.attack .damages {
    display: flex;
    justify-content: end;
    color: red;
    font-size: 12px;
    width: 50%;
    font-weight: bolder;
}
</style>
