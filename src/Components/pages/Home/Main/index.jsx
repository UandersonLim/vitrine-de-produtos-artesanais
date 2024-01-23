import { Card } from "../Cards";
import { dados } from "../../../../data";
import { Main } from "./style";

export const Component_Main = () => {
  return (
    <Main>
      
      <div className="box_Card">
        {dados.map((item) => (
          <Card key={item.id}
            card={item}
            id={item.id}
            nome={item.nome}
            descricao={item.descricao}
            imagem={item.imagem}
            preco={item.preco}
          />
        ))}
      </div>
      <a href="#"><p className="texto">Gostou?? Me chame no Whatsapp.<img src="../../../public/assets/image/whatsap.png"/></p></a>
    </Main>
  );
};
