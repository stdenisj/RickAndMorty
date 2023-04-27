import { AppBar, Grid, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar } from "@mui/material";
import { ArrowBackIosNew } from "@mui/icons-material";
import { PropsWithChildren, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { isMobile } from "../Hooks/isMobile";
import { AppThemeContext } from "../Providers/AppThemeProvider";

export function AppLayout(props: PropsWithChildren<{}>) {
	const mobile = isMobile();
	return (mobile ? <MobileLayout>{props.children}</MobileLayout> : <DeskTopLayout>{props.children}</DeskTopLayout>)
}

function DeskTopLayout(props: PropsWithChildren<{}>) {
	const navigate = useNavigate();
	const [theme, setTheme]  = useContext(AppThemeContext)

	return (
		<div id="desktop-layout">
			<div
				id="desktop-layout-sidebar"
				style={{
					top: 0,
					bottom: 0,
					width: 240,
					position: "absolute",
					overflowX: "hidden",
					whiteSpace: "nowrap",
				}}
			>
				<div style={{ overflowY: "auto" }}>
					<Grid container>
						<List sx={{ width: 1 }} >
							<ListItem disablePadding>
								<ListItemButton onClick={() => navigate("/characters")}>
									<ListItemText primary="Characters" />
								</ListItemButton>
							</ListItem>
							<ListItem disablePadding>
								<ListItemButton onClick={() => navigate("/locations")}>
									<ListItemText primary="Locations" />
								</ListItemButton>
							</ListItem>
							<ListItem disablePadding>
								<ListItemButton onClick={() => 
									theme === "dark" 
									? setTheme("light") 
									: setTheme("dark")
								}>
									<ListItemText primary={theme === "dark" ? "Light Mode" : "Dark Mode"} />
								</ListItemButton>
							</ListItem>
						</List>
					</Grid>
				</div>
			</div>
			<Grid
				id="desktop-layout-view"
				sx={{
					top: 0,
					bottom: 0,
					right: 0,
					left: 240,
					paddingTop: 2,
					paddingLeft: 4,
					paddingRight: 4,
					position: "absolute",
					overflowX: "hidden",
				}}
			>
				{props.children}
			</Grid>
		</div>
	);
}

function MobileLayout(props: PropsWithChildren<{}>) {
	const location = useLocation();
	const navigate = useNavigate();

	return (
		<div id="mobile-layout">
			<div id="mobile-layout-header">
				<AppBar position="absolute" style={{ backgroundColor: "#FFF", boxShadow: "none", height: 64 }}>
					<Toolbar>
						<>
							<IconButton
								color="inherit"
								aria-label="  "
								onClick={() => navigate(-1)}
								sx={{ color: "rgba(0,0,0,0.54)" }}
							>
								<ArrowBackIosNew />
							</IconButton>
						</>
					</Toolbar>
				</AppBar>
			</div>
			<div
				id="mobile-layout-header-view"
				style={{
					position: "absolute",
					top: 64,
					left: 0,
					right: 0,
					bottom: 0,
					overflowY: "auto",
				}}
			>
				{props.children}
			</div>
		</div>
	);
}