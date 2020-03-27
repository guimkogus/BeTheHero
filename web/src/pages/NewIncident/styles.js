import styled from 'styled-components';

export const Container = styled.div`
  .new-incident-container {
    width: 100%;
    max-width: 1120px;
    height: 100vh;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;

    .content {
      width: 100%;
      padding: 96px;
      background: #f0f0f5;
      box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
      border-radius: 8px;

      display: flex;
      align-items: space-between;
      justify-content: center;

      section {
        width: 100%;
        max-width: 380px;
        margin-right: 50px;

        h1 {
          margin: 64px 0 32px;
          font-size: 32px;
        }

        p {
          font-size: 18px;
          color: #737380;
          line-height: 32px;
        }
      }

      form {
        width: 100%;
        max-width: 450px;
        margin-left: 50px;

        input {
          margin-top: 8px;
        }
        textarea {
          margin-top: 8px;
        }
      }
    }
  }
`;