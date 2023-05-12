import { BrowserRouter } from "react-router-dom";
import "./App.css";
import ImageClassifier from "./Components/FileHandler";
import { UploadImage } from "./Components/FileHandler/File.style";
import Header from "./Components/Header";
import { HighlightedText } from "./Global.style";

function App() {
  const handleReset = () => {
    window.location.reload();
  };
  return (
    <BrowserRouter>
      <Header />
      <div style={{ marginTop: "10px", marginLeft: "10px" }}>
        <UploadImage onClick={handleReset}>Reset Environment</UploadImage>
      </div>
      <HighlightedText>
        Lets Predict the Tumour with our Multi Model trained on variety of
        DataSet for Classification
      </HighlightedText>
      <ImageClassifier />
    </BrowserRouter>
  );
}

export default App;
