import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        --primary: #1976d2;
    }

    * {
        font-family: 'Roboto', Arial, sans-serif;
        box-sizing: border-box;
    }

    body{
        margin: 0;
    }

    h1 {
        font-size: 32px;
    }
    
    h2 {
        font-size: 20px;
    }
    
    h1, h2 {
        font-weight: lighter;
    }
    
    p {
        font-size: 14px;
    }

    a {
        cursor: pointer;
        color: #1976d2;
        text-decoration: none;
    }
    
    a:hover {
        opacity: 0.8;
    }

    input {
        font-size: 14px;
        border-radius: 2px;
        padding: 8px;
        margin-bottom: 16px;
        border: 1px solid #BDBDBD;
    }
    
    label {
        font-size: 12px;
        font-weight: bold;
        margin-bottom: 4px;
        display: block;
        text-transform: uppercase;
    }

    button {
        width: fit-content;
        display: inline-flex;
        align-items: center;
        padding: 8px 16px;
        border-radius: 2px;
        font-size: 14px;
        cursor: pointer;
        background-color: #1976d2;
        color: white;
        border: none;
        margin-bottom: 10px;
    }

    button:hover {
        opacity: 0.8;
        font-weight: normal;
    }
    button:disabled {
        opacity: 0.5;
        cursor: auto;
    }
`;
