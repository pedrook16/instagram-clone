import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 50px;
  padding-top: 0px;

  .div2 {
    margin-left: 150px;
  }
`;

export const Div = styled.div`
  position: fixed;
  width: 50px;
  right: 10px;
  top: 100px;
  z-index: 9;

  .icon {
    font-size: 50px;
  }

  .icon:hover {
    transition: all 0.2s;
    transform: translateY(-5px);
  }
`;

export const Article = styled.article`
  header {
    display: flex;
  }
`;

export const Card = styled.div`
 
`;
