import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
  alpha,
} from "@mui/material";
import Iconify from "../Iconify/Iconify";
import { usePathname, useRouter } from "next/navigation";
import menuItems from "./Routes";

export default function Menux() {
  const router = useRouter();
  const pathName = usePathname();

  const theme = useTheme();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        sx={{ bgcolor: theme.palette.primary.dark, boxShadow: "none" }}
        position="static"
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          bgcolor: alpha(theme.palette.primary.dark, 0.9),
          width: 2020,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 220,
            boxSizing: "border-box",
            bgcolor: alpha(theme.palette.primary.dark, 0.9),
            boxShadow: 4,
            overflowX: "hidden",
          },
          "& .MuiToolbar-root": {
            bgcolor: alpha(theme.palette.primary.dark, 0.9),
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <Box ml={3} display="flex" justifyContent="center" p={2}>
            <img
              onClick={() => router.push("/routes/home")}
              src="/logo1.png"
              style={{ cursor: "pointer" }}
              alt="Logo"
              height="38"
              width="65"
            />
          </Box>
        </Toolbar>
        <Divider />
        <List>
          {menuItems.map((item, index) => (
            <>
              {item.divider ? (
                <Divider key={`divider-${index}`} />
              ) : (
                <ListItem key={item.key} disablePadding>
                  <ListItemButton
                    onClick={() => {
                      router.push(`${item.key}`);
                    }}
                    sx={{
                      transition: "transform 0.2s ease-in-out",
                      bgcolor:
                        pathName === item.key
                          ? theme.palette.primary.light
                          : "inherit",
                      "&:hover": {
                        ":hover": {
                          transform: "scale(1.05)",
                          transition: "transform 0.2s ease-in-out",
                        },
                        bgcolor:
                          pathName === item.key
                            ? theme.palette.primary.darker
                            : "rgba(0, 0, 0, 0.04)",
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color: theme.palette.primary.contrastText,
                        minWidth: "32px",
                      }}
                    >
                      <Iconify
                        fontSize={25}
                        icon={item && item.icon == undefined ? "" : item.icon}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      sx={{
                        "& .MuiTypography-root": {
                          fontSize: 16,
                          color: theme.palette.primary.contrastText,
                        },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              )}
            </>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
