export type PokemonData = {
  id: number;
  name: string;
  type: string;
  weight: number;
  image: string
  // animatedImage: string
}

export type Type = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};