import { Col } from "react-bootstrap";
import { useGetPokemon } from "../hooks/useGetPokemon";
import Loader from "./Loader";

export const Cardex = ({ pokemon }) => {
  const [loading, error, infoPokemon] = useGetPokemon(pokemon.url);

  return (
    <Col xs={12} sm={6} lg={4} xl={3} className="d-flex justify-content-center">
      {!loading && infoPokemon ? (
        <div className="CardContainer">
          <img src={infoPokemon.sprites.front_default} alt={pokemon.name} />
          <h1>
            {infoPokemon.id}. {pokemon.name}
          </h1>
          <p>
            Type:
            {infoPokemon.types.map((element, i) => (
              <span kew={element.type.slot}>{(i ? "," : " ") + element.type.name}</span>
            ))}
          </p>
        </div>
      ) : (
        <Loader />
      )}
    </Col>
  );
};
