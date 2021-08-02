export const capitalizeFirstLetter = (value) => {
  return value[0].toUpperCase() + value.slice(1);
}

export const colorAssign = (data) => {
  const colorPrimary = typesPokemon[data[0]?.type.name];
  const colorSecond = typesPokemon[data[1]?.type.name];
  return colorSecond ? `linear-gradient(0deg, ${colorPrimary}0.5) 0%, ${colorSecond}0.5) 100%)` : `${colorPrimary}0.5)`;
}

export const colorBorder = (value) => `${typesPokemon[value]}1)`;

const typesPokemon = {
  normal: 'rgb(188, 180, 167, ',
  fighting: 'rgb(208, 122, 121, ',
  flying: 'rgb(145, 180, 210, ',
  poison: 'rgb(178, 101, 179, ',
  ground: 'rgb(184, 143, 113, ',
  rock: 'rgb(212, 202, 130, ',
  bug: 'rgb(152, 166, 130, ',
  ghost: 'rgb(175, 164, 243, ',
  steel: 'rgb(145, 180, 210, ',
  fire: 'rgb(228, 139, 107, ',
  water: 'rgb(141, 165, 237, ',
  grass: 'rgb(123, 185, 122, ',
  electric: 'rgb(231, 174, 106, ',
  psychic: 'rgb(221, 115, 181, ',
  ice: 'rgb(138, 209, 191, ',
  dragon: 'rgb(145, 137, 186, ',
  fairy: 'rgb(230, 111, 175, ',
  dark: 'rgb(148, 120, 116, ',
  unknown: 'rgb(230, 111, 100, ',
  shadow: 'rgb(148, 100, 116, ',
}