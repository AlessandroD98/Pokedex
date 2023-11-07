import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { Col } from "react-bootstrap";
import { useGetPokemon } from "../hooks/useGetPokemon";
import { fadeIn } from "../utils/motion";
import Loader from "./Loader";

export const PokemonCard = ({ pokemon, index }) => {
  const [loading, error, infoPokemon] = useGetPokemon(pokemon.url);
  return (
    <Col xs={12} sm={6} lg={4} xl={3} className="d-flex justify-content-center">
      <Tilt
        options={{
          max: 45,
          scale: 1.2,
          speed: 450,
        }}
      >
        <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)}>
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
        </motion.div>
      </Tilt>
    </Col>
  );
};
