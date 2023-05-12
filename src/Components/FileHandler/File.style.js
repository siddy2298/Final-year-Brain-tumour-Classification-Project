import styled from "styled-components";

export const MainContainer = styled.div`
  margin:2rem;
`;

export const InputHolder = styled.div`
  margin: 15px 0;
`;

export const MainWrapper = styled.div`
  padding: 0 10px;
`;

export const MainContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
export const UploadInput = styled.input`
  width: 0px;
  height: 0px;
  visibility: hidden;
  opacity: 0;
`;

export const Or = styled.span`
  align-items: center;
  display: inline-flex;
  padding: 0 20px;
  font-family: "Poppins", sans-serif;
`;

export const UploadImage = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  background: #1b1a3a;
  color: #fff;
  display: inline-block;
  border: 0;
  border-radius: 0;
  cursor: pointer;
  outline: none;
  font-family: "Poppins", sans-serif;
`;

export const ClassifyImage = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  background: #1b1a3a;
  color: #fff;
  display: inline-block;
  border: 0;
  border-radius: 0;
  cursor: pointer;
  outline: none;
  font-family: "Poppins", sans-serif;
`;

export const TextInput = styled.input`
  max-width: 400px;
  width: 100%;
  padding: 5px 10px;
  font-size: 16px;
  border-radius: 0;
  display: inline-block;
  border: 1px solid #222;
  outline: none;
  font-family: "Poppins", sans-serif;
`;

export const ImageHolder = styled.div`
  width: 40%;
  display: flex;
  flex: 0 0 60%;
  max-width: 400px;
  height: 30vmin;

  @media (max-width: 800px) {
    width: 100%;
    height: auto;
    margin-bottom: 15px;
  }

  &:empty {
    display: none;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ResultsHolder = styled.div`
  padding: 30px;

  @media (max-width: 800px) {
    width: 100%;
    padding: 0;
  }
`;

export const RecentPredictionsWrapper = styled.div`
  margin: 20px 0 0;
  background: #1b1a3a;
  padding: 10px;

  h2 {
    color: #fff;
    font-size: 36px;
    display : flex;
    justify-content : center;
    font-family: "Poppins", sans-serif;
  }
`;

export const RecentImagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const RecentPredictionWrapper = styled.div`
  flex: 0 0 20%;
  cursor: pointer;

  @media (max-width: 1100px) {
    flex: 0 0 25%;
  }

  @media (max-width: 870px) {
    flex: 0 0 33.3%;
  }

  @media (max-width: 700px) {
    flex: 0 0 50%;
  }
`;

export const RecentPredictionImg = styled.img`
  display: block;
  width: 100%;
  height: 200px;
  object-fit: contain;
  padding : 1rem;
  @media (max-width: 700px) {
    height: 260px;
  }
`;
