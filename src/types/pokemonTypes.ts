export interface Type {
  id: number;
  name: string;
}

export interface Attack {
  id: number;
  name: string;
  damages: number;
  typeId: number;
  type: Type;
}

export interface Pokemon {
  id: number;
  name: string;
  pokedexId: number;
  type: Type;
  imageUrl: string;
  lifePoints: number;
  attackId: number;
  attack: Attack;
  height: number;
  weight: number;
  weakness: Type;
  weaknessId: number;
}
