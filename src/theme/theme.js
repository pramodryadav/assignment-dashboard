import { Padding } from '@mui/icons-material';
import { grey } from '@mui/material/colors';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: {
            main: '#3C60FF',
          },
          secondary: {
            main: '#A140E7',
          },
          background: {
            default: "#fff",
            paper: "#fff",
          },
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
          border: {
            primary: "#0000001a",
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: '#fff',
          },
          secondary: {
            main: '#fff',
          },
          background: {
            default: "#121212",
            paper: "#313131",
            container: "#202028",
          },
          text: {
            primary: '#fff',
            secondary: grey[500],
          },
          border: {
            primary: "#ffffff1a",
          },
        }),
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: ({ ownerState, theme }) => ({
          ...(ownerState.variant === 'permanent' && {
            backgroundColor: "#202028",
            boxSizing: "border-box",
            width: `${theme.mixins.drawerWidth}px`,
            flexShrink: 0,
            overflowX: "hidden",
            paddingTop: "14px",
          }),
        }),
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 0,
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          height: "80px",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "#ffffff8a",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          justifyContent: "center",
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          rowGap: "20px",
        },
      },
    },
   
    
    MuiTableContainer:{
        styleOverrides: {
          root: {
            borderRadius:"5px",
            backgroundColor: mode === 'light' ? '#f5f5f5' : '#202028', // Change this color as needed
          },
        },
      },
      MuiTableCell:{
        styleOverrides: {
            root: {
              padding:"16px 0px",
              fontWeight:"normal"
            },
          },
      },
    MuiTable: {
        styleOverrides: {
          root: {
            
            backgroundColor: mode === 'light' ? '#f5f5f5' : '#202028', // Change this color as needed
          },
        },
      },
    MuiButton: {
      styleOverrides: {
        white: {
          backgroundColor: "#fff",
          border: "1px solid #ddd",
          color: "#333",
          '&:hover': {
            backgroundColor: '#fff',
            opacity: "0.4",
          },
        },
      },
    },
  },
  mixins: {
    drawerWidth: 80,
  },
});

export default getDesignTokens;
