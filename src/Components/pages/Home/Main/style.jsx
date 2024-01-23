import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  width: 100%;
  background-color: #f8f8ff;
  background-image: url("assets/image/Fundo-artesanato.jpg");
  background-repeat: no-repeat;

  .box_Card, ::-webkit-scrollbar {
    overflow-y: scroll;
    display: flex;
    width: 75%;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    height: 600px;
    padding: 1rem 0;

  }

  .texto{
    display: flex;
    align-items: center;
    background-color: #128C7E;
    padding: 10px 15px;
    gap: 5px;
    font-weight: 900;
    margin-top: 1rem;
    border-radius: 15px;
    color: #fff;
    
  }

  .texto img{
    width: 20px;
  }

  @media(max-width: 440px){
    .texto{
      font-size: 14px;
    }
  }
  
`;
