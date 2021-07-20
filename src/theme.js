import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#000",
  a: "#333",
};

export const darkTheme = {
  body: "#000",
  fontColor: "#fff",
  a: '#fff',
};

export const GlobalStyles = createGlobalStyle`

	body {

		background-color: ${(props) => props.theme.body};

	}

  a {
    color: ${(props) => props.theme.a};
  }

`;
