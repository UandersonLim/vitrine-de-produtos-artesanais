import styled from "styled-components";

export const Style_Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 280px;
  background-color: #FFF5EE;
  border-radius: 5px;
  box-shadow: 2px 2px 5px #000;

  figure{
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 5px;
  }
  h2{
    font-size: 1rem;
  }

  figure img {
    width: 95%;
    height: 250px;
    border-radius: 5px;
  }

  figcaption{
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 2rem;
    line-height: 20px;
    font-weight: 600;
  }

 

  .preco{
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 0 1rem 1rem 1rem;
  }

  .preco button{
    width: 25px;
  }
`;
