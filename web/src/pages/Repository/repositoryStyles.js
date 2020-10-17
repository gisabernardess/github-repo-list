import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const Owner = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  div:first-child {
    align-self: flex-start;
    flex: 1 1 100%;
    margin-bottom: 30px;

    & > a {
      text-decoration: none;
      padding: 5px 10px;

      & svg {
        vertical-align: top;
        margin-right: 4px;
      }
    }
  }
`;

export const OwnerProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 40px;
  align-self: flex-start;

  @media (max-width: 600px) {
    margin: 0;
  }

  h2 {
    font-size: 20px;
  }

  img {
    width: 88px;
    border-radius: 50%;
    border: 4px solid #e6e6e6;
    margin-bottom: 5px;
  }
`;

export const RepoInfo = styled.div`
  display: grid;
  align-self: flex-start;

  @media (max-width: 600px) {
    text-align: center;
  }

  h1 {
    font-size: 24px;

    & > a {
      color: inherit;
      text-decoration: none;

      &:hover {
        color: #0099ff;
      }
    }
  }

  & div {
    display: flex;
    margin: 8px 0 16px;

    & p {
      background: #0099ff;
      color: #fff;
      font-size: 12px;
      border-radius: 3px;
      margin-right: 8px;
      padding-left: 5px;
      display: flex;
      flex-direction: row;
      align-items: center;

      @media (max-width: 540px) {
        display: -moz-grid-group;
      }

      & span {
        background: #eee;
        color: #333;
        font-size: 12px;
        padding: 2px 4px;
        margin-left: 5px;

        @media (max-width: 540px) {
          padding: 4px 2px;
        }

        & svg {
          vertical-align: text-top;
        }
      }
    }
  }

  p {
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    max-width: 400px;
  }
`;

export const IssueList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  list-style: none;
  min-height: 524px;

  li {
    & + li {
      margin-top: 10px;
    }

    a {
      padding: 15px 10px;
      border: 1px solid #eee;
      border-radius: 4px;
      text-decoration: none;
      color: #333;
      line-height: 21px;
      display: flex;
      transition: all 180ms ease-in-out;

      &:hover {
        color: #0099ff;
        border-color: #ddd;
        transform: scale(1.005);
        box-shadow: 0 12px 10px -10px hsla(254, 26%, 25%, 0.27);
      }
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        & span:first-child {
          margin-right: 10px;
          background: #eee;
          color: #333;
          border-radius: 2px;
          font-size: 12px;
          height: 15px;
          padding: 1px 2px 0px 4px;
          margin-left: 10px;

          svg {
            vertical-align: text-top;
            margin-right: 3px;
          }
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
