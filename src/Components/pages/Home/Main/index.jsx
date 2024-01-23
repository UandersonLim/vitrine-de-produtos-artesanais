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
      <a href="https://api.whatsapp.com/send?phone=5575991574066&text=Ol%C3%A1!%20Vim%20comprar%20porta-chaves%20e%20porta-panos%20de%20prato." target="_blank"><p className="texto">Gostou?? Me chame no Whatsapp.<img src="assets/image/whatsap.png"/></p></a>
    </Main>
  );
};
