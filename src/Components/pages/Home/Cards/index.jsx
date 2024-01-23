import { Style_Card } from "./style";

export const Card = (props) => {

  return (
    <Style_Card>
      <figure>
        <img src={props.imagem} />
      </figure>
      <figcaption>
      <h2>{props.nome}</h2>
      {props.descricao}
      </figcaption>
      <p className="preco">R${props.preco},00</p>
    </Style_Card>
  );
};
