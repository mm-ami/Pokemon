import { Text, Box, Image } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import AppHeader from '../../components/common/AppHeader';
import { PokemonData, Type } from '../../types';

const Sample: React.FC = () => {
  const [pokemons, setPokemons] = useState<PokemonData[]>([]);

  const getPokemon = async () => {
    try {
      for (let id = 1; id <= 5; id++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!response.ok) {
          throw new Error('Found no Pokemon!');
        }

        const data = await response.json();

        const pokemon: PokemonData = {
          id: data.id,
          name: data.name,
          weight: data.weight,
          type: data.types.map((d: Type) => d.type.name).join(', '),
          image: data.sprites.other['official-artwork'].front_default,
          // animatedImage:
          //   data.sprites.versions['generation-v']['black-white'].animated
          //     .front_default,
        };

        console.log(pokemon.image)

        setPokemons((prevPokemons) => {
          return [...prevPokemons, pokemon];
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <>
      <AppHeader />
      <Box bgColor="background.main">
        {pokemons.map((pokemon) => (
          <Box key={pokemon.id}>
            <Text color="font.base">{pokemon.name}</Text>
            <Text>{pokemon.type}</Text>
            <Text>{pokemon.weight}</Text>
            <Image h="100px" w="100px" src={pokemon.image} />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Sample;