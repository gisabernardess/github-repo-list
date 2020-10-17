import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: solid ${props => (props.error ? '2px #e41111' : '1px #eee')};
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading || props.empty,
}))`
  background: #0099ff;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const ErrorMessage = styled.div`
  display: flex;
  margin-top: 5px;

  small {
    margin-left: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 5px;

    svg {
      margin-right: 3px;
    }
  }
`;

export const List = styled.ul`
  margin-top: 30px;
  list-style-type: none;
  font-size: 16px;

  li {
    display: flex;
    padding: 15px 10px;
    border-radius: 4px;
    align-items: center;

    & + li {
      border-top: 1px solid #eee;
    }

    img {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      border: 2px solid #eee;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 21px;
        display: flex;
        flex-direction: row;
        align-items: center;

        a {
          text-decoration: none;
          color: #333;

          &:hover {
            color: #0099ff;
          }
        }

        span {
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
        font-size: 14px;

        & + p {
          margin-top: 2px;
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
`;
