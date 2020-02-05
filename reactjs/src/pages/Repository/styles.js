import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 50px;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100px;
    border-radius: 50%;
    margin-top: 20px;
  }
  h1 {
    font-size: 24px;
    margin-top: 10px;
  }
  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    text-align: center;
    max-width: 400px;
    line-height: 1.4; /*Altura do paragrafo*/
  }
  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }
`;

export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #ffdead;
  list-style: none;
  li {
    display: flex;
    padding: 15px 10px;

    & + li {
      margin-top: 10px;
      border-top: 1px solid #ffdead;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      margin-top: 10px;
      border: 2px solid #eee;
    }
    div {
      flex: 1; /*Para os nossos textos não passar do tamanho do container*/
      margin-left: 15px;

      strong {
        font-size: 16px;
        a {
          color: #333;
          text-decoration: none;
          &:hover {
            color: #7159c1;
          }
        }
        span {
          background: #eee;
          color: #444;
          border-radius: 2px;
          font-size: 12px;
          font-weight: 600;
          height: 20px;
          padding: 3px 4px;
          margin-left: 10px;
        }
      }
      p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
      }
    }
  }
`;
