import styled from "styled-components";

export const StyledTestimonials = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Fraunces:wght@700;900&display=swap");

  height: 600px;
  padding: 100px 150px;
  text-align: center;

  h3 {
    font-family: "Fraunces", serif;
    font-size: 22px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.blue4};
    margin-top: 0;
    padding-bottom: 50px;
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    padding: 50px 20px;
  }
`;

export const TestContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    flex-direction: column;
  }

`;

export const StyledTestimonial = styled.div`
    padding: 30px;
    margin: 20px;
    padding-top: 0;
    margin-top: 0;
    

    img {
        border-radius: 100%;
        width: 70px;
        height: 70px;
        margin-bottom: 30px;
    }

    p {
        line-height: 1.5;
        padding-bottom: 25px;
        color: ${({ theme }) => theme.colors.blue2};

    }

    h4 {
        font-family: "Fraunces", serif;
        color: ${({ theme }) => theme.colors.blue2};
        margin-bottom: 0;
    }

    h5 {
        color: ${({ theme }) => theme.colors.blue4};
margin-top: 10px;
    }


`
