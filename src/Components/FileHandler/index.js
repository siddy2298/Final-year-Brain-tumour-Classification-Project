import { useState, useEffect, useRef } from "react";
import {
  ClassifyImage,
  ImageHolder,
  InputHolder,
  MainContainer,
  MainContent,
  MainWrapper,
  Or,
  RecentImagesWrapper,
  RecentPredictionImg,
  RecentPredictionsWrapper,
  RecentPredictionWrapper,
  TextInput,
  UploadImage,
  UploadInput,
} from "./File.style";
import { HighlightedText } from "../../Global.style";
import GraphComponent from "../GraphComponent";
import loader from "../../assets/loader2.gif";

const endpointUrl = "https://ranati-tumor.hf.space/fusion-predicition";

function ImageClassifier() {
  const [imageURL1, setImageURL1] = useState(null);
  const [imageURL2, setImageURL2] = useState(null);
  const [imageURL3, setImageURL3] = useState(null);
  const [imageFile1, setImageFile1] = useState(null);
  const [imageFile2, setImageFile2] = useState(null);
  const [imageFile3, setImageFile3] = useState(null);

  const [results, setResults] = useState([]);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const imageRef1 = useRef();
  const imageRef2 = useRef();
  const imageRef3 = useRef();

  const textInputRef1 = useRef();
  const textInputRef2 = useRef();
  const textInputRef3 = useRef();

  const fileInputRef1 = useRef();
  const fileInputRef2 = useRef();
  const fileInputRef3 = useRef();

  const [prediction, setPrediction] = useState();

  const handleImageUpload1 = (e) => {
    const { files } = e.target;
    if (files.length > 0) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const file = new File([fileReader.result], files[0].name, {
          type: files[0].type,
        });
        setImageFile1(file);
      };
      fileReader.readAsArrayBuffer(files[0]);
      const url = URL.createObjectURL(files[0]);
      setImageURL1(url);
    } else {
      setImageURL1(null);
    }
  };

  const handleImageUpload2 = (e) => {
    const { files } = e.target;
    if (files.length > 0) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const file = new File([fileReader.result], files[0].name, {
          type: files[0].type,
        });
        setImageFile2(file);
      };
      fileReader.readAsArrayBuffer(files[0]);
      const url = URL.createObjectURL(files[0]);
      setImageURL2(url);
    } else {
      setImageURL2(null);
    }
  };

  const handleImageUpload3 = (e) => {
    const { files } = e.target;
    if (files.length > 0) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const file = new File([fileReader.result], files[0].name, {
          type: files[0].type,
        });
        setImageFile3(file);
      };
      fileReader.readAsArrayBuffer(files[0]);
      const url = URL.createObjectURL(files[0]);
      setImageURL3(url);
    } else {
      setImageURL3(null);
    }
  };

  const identifyImage = async () => {
    try {
      setLoading(true);

      const formData = new FormData();

      if (imageFile1) {
        formData.append(
          "img1",
          new Blob([imageFile1], { type: imageFile1.type })
        );
      }
      if (imageFile2) {
        formData.append(
          "img2",
          new Blob([imageFile2], { type: imageFile2.type })
        );
      }
      if (imageFile3) {
        formData.append(
          "img3",
          new Blob([imageFile3], { type: imageFile3.type })
        );
      }

      const response = await fetch(
        "https://ranati-tumor.hf.space/fusion-predicition",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Response:", data);
        const tumorPrediction = data["Tumor Predicition"];

        // Update the state with the prediction value
        setPrediction([tumorPrediction]);

        // Process the response data as needed
      } else {
        console.error("Request failed with status:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageURLChange1 = (e) => {
    setImageURL1(e.target.value);
    setResults([]);
  };
  const handleImageURLChange2 = (e) => {
    setImageURL2(e.target.value);
    setResults([]);
  };

  const handleImageURLChange3 = (e) => {
    setImageURL3(e.target.value);
    setResults([]);
  };

  const triggerImageUpload1 = () => {
    fileInputRef1.current.click();
  };
  const triggerImageUpload2 = () => {
    fileInputRef2.current.click();
  };
  const triggerImageUpload3 = () => {
    fileInputRef3.current.click();
  };

  useEffect(() => {
    if (imageURL1) {
      setHistory([imageURL1, ...history]);
    }
  }, [imageURL1]);

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <img src={loader} alt="Loading" className="loader-image" />
        </div>
      ) : (
        <MainContainer>
          <div>
            <InputHolder>
              <UploadInput
                type="file"
                accept="image/*"
                capture="camera"
                className="uploadInput"
                onChange={handleImageUpload1}
                ref={fileInputRef1}
              />
              <UploadImage onClick={triggerImageUpload1}>
                Upload Image
              </UploadImage>
              <Or>OR</Or>
              <TextInput
                type="text"
                placeholder="Paste image URL"
                ref={textInputRef1}
                onChange={handleImageURLChange1}
              />
            </InputHolder>

            {imageURL1 && "Successfully Uploaded Image 1"}
          </div>
          <div>
            <InputHolder>
              <UploadInput
                type="file"
                accept="image/*"
                capture="camera"
                className="uploadInput"
                onChange={handleImageUpload2}
                ref={fileInputRef2}
              />
              <UploadImage onClick={triggerImageUpload2}>
                Upload Image
              </UploadImage>
              <Or>OR</Or>
              <TextInput
                type="text"
                placeholder="Paste image URL"
                ref={textInputRef2}
                onChange={handleImageURLChange2}
              />
            </InputHolder>

            {imageURL2 && "Successfully Uploaded Image 2"}
          </div>
          <div>
            <InputHolder>
              <UploadInput
                type="file"
                accept="image/*"
                capture="camera"
                className="uploadInput"
                onChange={handleImageUpload3}
                ref={fileInputRef3}
              />
              <UploadImage onClick={triggerImageUpload3}>
                Upload Image
              </UploadImage>
              <Or>OR</Or>
              <TextInput
                type="text"
                placeholder="Paste image URL"
                ref={textInputRef3}
                onChange={handleImageURLChange3}
              />
            </InputHolder>

            {imageURL3 && "Successfully Uploaded Image 3"}
          </div>

          <MainWrapper>
            <MainContent>
              <ImageHolder>
                {imageURL1 && (
                  <img
                    src={imageURL1}
                    alt="Upload Preview"
                    crossOrigin="anonymous"
                    ref={imageRef1}
                  />
                )}
              </ImageHolder>
              <ImageHolder>
                {imageURL2 && (
                  <img
                    src={imageURL2}
                    alt="Upload Preview"
                    crossOrigin="anonymous"
                    ref={imageRef2}
                  />
                )}
              </ImageHolder>
              <ImageHolder>
                {imageURL3 && (
                  <img
                    src={imageURL3}
                    alt="Upload Preview"
                    crossOrigin="anonymous"
                    ref={imageRef3}
                  />
                )}
              </ImageHolder>
              {results.length > 0 && console.log(results, results)}
            </MainContent>
          </MainWrapper>

          {imageURL1 && imageURL2 && imageURL3 ? (
            <ClassifyImage onClick={identifyImage}>
              Classify Image For Tumour
            </ClassifyImage>
          ) : (
            <HighlightedText>Please Add 3 images then classify</HighlightedText>
          )}

          {prediction && (
            <>
              <h1>Got your Results : </h1>
              <HighlightedText>{prediction}</HighlightedText>
              <div className="PredictionResults">
                <div className="graph">
                  <GraphComponent prediction={prediction} />
                </div>
              </div>
            </>
          )}
          {/* {history.length > 0 && (
        <RecentPredictionsWrapper>
          <h2>Recent Images</h2>
          <RecentImagesWrapper>
            {history.map((image, index) => {
              return (
                <RecentPredictionWrapper key={`${image}${index}`}>
                  <RecentPredictionImg
                    src={image}
                    alt="Recent Prediction"
                    onClick={() => setImageURL(image)}
                  />
                </RecentPredictionWrapper>
              );
            })}
          </RecentImagesWrapper>
        </RecentPredictionsWrapper>
      )} */}
        </MainContainer>
      )}
    </>
  );
}

export default ImageClassifier;
