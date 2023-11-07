import { Container, Row } from "react-bootstrap";
import { useGetData } from "../hooks/useGetData";
import { Cardex } from "./Cardex";
import { useEffect, useState } from "react";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import Loader from "./Loader";
import { useSelector } from "react-redux";

export const Home = () => {
  const [offset, setOffset] = useState(0);
  const [loading, error] = useGetData(offset);
  // console.log(pokemons);
  const pokemons = useSelector((state) => state.pokemon.pokemons);

  const handleClickLeft = () => {
    if (offset === 0) {
      return;
    } else {
      setOffset(offset - 20);
    }
  };

  const handleClicRight = () => {
    setOffset(offset + 20);
  };

  return (
    <Container>
      <Row>
        <div className="HeaderContainer">
          <button onClick={handleClickLeft}>
            <BsChevronDoubleLeft className="icon" />
            <span> Previous Pokemons</span>
          </button>
          <h1>Pokedex</h1>
          <button onClick={handleClicRight}>
            <span> Next Pokemons </span>
            <BsChevronDoubleRight className="icon" />
          </button>
        </div>
      </Row>
      <Row>
        {!loading ? (
          pokemons && pokemons.map((pokemon, i) => <Cardex pokemon={pokemon} key={pokemon.name} num={i} />)
        ) : (
          <Loader />
        )}
      </Row>
    </Container>
  );
};
