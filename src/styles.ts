import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: Arial, sans-serif;
    }

    @media (max-width: 768px) {
        .sidebar {
            width: 60px;
        }

        .content {
            padding: 10px;
        }
    }
`;

export default GlobalStyle;
