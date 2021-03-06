import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { 
	GetApiData, 
	GetPokemonChar, 
	ApiMeta,
	Pokemon,
} from '../../Utils';

import PokemonCard from '../PokemonCard';
import Footer from '../Footer'

import {
	Content,
	Pagination,
	PrevButton,
	NextButton
} from './style';

const PokeList: React.FC<{pushToCart: any}> = ({ pushToCart }) => {
	const [ apiMeta, setApiMeta ] = useState<ApiMeta | null>(null);
	const [ pokemonList, setPokemonList ] = useState<Pokemon[]>([]);
	const [ offset, setOffset ] = useState<number>(0);
	const limit: number = 20;

	useEffect(() => {
		const getPokemonList = async () => {
			const { data: { count, next, previous, results } } = await GetApiData(offset, limit);

			let pokeList = [];
			for await (const pokemon of results) {
				const pokemonChar = await GetPokemonChar(pokemon);
				pokeList.push(pokemonChar);
			};

			setApiMeta({ count, next, previous });
			setPokemonList(pokeList);
		};

		getPokemonList();
	}, [offset]);

	const handlePrevButton = () => {
		if (apiMeta?.previous) {
			setOffset(offset-20);
		}
	};

	const handleNextButton = () => {
		if (apiMeta) {
			(offset > apiMeta.count)
				? setOffset(apiMeta.count)
				: setOffset(offset+20);
		}
	};

	return(
		<>
			{
				pokemonList[0] ? (
				<div>
					<Content>
						{
							pokemonList.map((pokemon: Pokemon) => {
								return (
									<PokemonCard
										key={pokemon.id}
										pokemon={pokemon}
										pushToCart={pushToCart} 
									/>
								)
							})
						}
					</Content>

					<Pagination>
					<Footer />
						<PrevButton
							onClick={handlePrevButton}
							disabled={apiMeta?.previous === null}
						>
							<FaChevronLeft /> Anterior
						</PrevButton>

						<NextButton
							onClick={handleNextButton}
							disabled={apiMeta?.count ? offset >= apiMeta.count : false}
						>
							Próxima <FaChevronRight />
						</NextButton>
					</Pagination>
					<p>Elaborado por Alessandro Muniz Caranha</p>
				</div>

				) : 'Loading...'
			}
		</>
	);
};

export default PokeList;
