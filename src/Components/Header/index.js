import React from "react";
import {
  HeaderContainer,
  HeaderLogo,
} from "./Header.style";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
          <HeaderLogo onClick={() => navigate("/")} >
              Multi Model
      </HeaderLogo>
    </HeaderContainer>
  );
};

export default Header;
