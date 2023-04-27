import { Grid, List, ListItem, ListItemButton, ListItemText, SpeedDial, SpeedDialAction } from "@mui/material";
import { Groups, Menu, Public } from "@mui/icons-material";
import { PropsWithChildren, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { isMobile } from "../Hooks/isMobile";
import { AppThemeContext } from "../Providers/AppThemeProvider";
import { routes } from "../App";

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
			<div
				id="mobile-layout-header-view"
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					overflowY: "auto",
				}}
			>
				{props.children}
			</div>
			<SpeedDial
				sx={{ position: 'absolute', bottom: 16, right: 16 }}
				icon={<Menu />} ariaLabel={""}				>
					<SpeedDialAction
						key={"Locations"}
						icon={<Public />}
						tooltipTitle={"Locations"}
						onClick={() => navigate(routes.locationsListPage)}
					/>
					<SpeedDialAction
						key={"Characters"}
						icon={<Groups />}
						tooltipTitle={"Characters"}
						onClick={() => navigate(routes.charactersListPage)}
					/>
				</SpeedDial>
		</div>
	);
}