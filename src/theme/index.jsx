import React, { useContext, useMemo } from 'react';
import { StyledEngineProvider, ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import getDesignTokens from './theme';

import { ThemeContext } from '../context/ThemeContext';

const ThemeConfig = ({ children }) => {
    const { mode } = useContext(ThemeContext);

    const theme = useMemo(() => {
        let theme = createTheme(getDesignTokens(mode));
        theme = responsiveFontSizes(theme);
        return theme;

    }, [mode]);
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    )
}

export default ThemeConfig