import styled from 'styled-components';

const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  & > h1 {
    font-size: 24px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;

    svg {
      margin-right: 10px;
    }
  }

  & hr {
    margin: 15px 0px;
    border: 1px solid #eee;
  }

  @media (max-width: 600px) {
    margin-top: 0;
    border-radius: 0;
  }
`;

export default Container;
