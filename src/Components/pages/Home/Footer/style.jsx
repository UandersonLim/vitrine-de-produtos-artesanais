import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  img {
    width: 150px;
    height: 150px;
  }

  p {
    font-weight: 800;
  }

  @media (max-width: 680px) {
    flex-wrap: wrap;

    p{
      margin-bottom: 1rem;
    }

    img{
      height: 80px;
      width: 100px;
    }
  }

  @media (max-width: 448px){
    p{
      font-size: 12px;
    }
  }
`;
