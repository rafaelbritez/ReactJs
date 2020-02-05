/* Container para pagina main e pagina de repositorios */
import styled from 'styled-components';

const Container = styled.div`
  max-width: 700px;
  background: #fff8dc;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 50px auto;

  h1 {
    font-size: 20px;
    display: flex;
    align-items: center;
    color: #181818;
    flex-direction: row;

    svg {
      margin-right: 10px;
    }
  }
`;

export default Container;
