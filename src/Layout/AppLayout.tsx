import { AppBar, Divider, Grid, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar } from "@mui/material";
import { ArrowBackIosNew } from "@mui/icons-material";
import { PropsWithChildren } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { isMobile } from "../Hooks/isMobile";

export function AppLayout(props: PropsWithChildren<{}>) {
	const mobile = isMobile();
	return (mobile ? <MobileLayout>{props.children}</MobileLayout> : <DeskTopLayout>{props.children}</DeskTopLayout>)
}

function DeskTopLayout(props: PropsWithChildren<{}>) {
	const navigate = useNavigate();

	return (
		<div id="desktop-layout">
			<div
				id="desktop-layout-sidebar"
				style={{
					top: 75,
					bottom: 0,
					width: 240,
					position: "absolute",
					overflowX: "hidden",
					whiteSpace: "nowrap",
				}}
			>
				<div style={{ overflowY: "auto" }}>
					<Grid sx={{ pt: 1 }} container>
						<List sx={{ pt: 1, width: 1 }} >
							<Divider sx={{ mt: 1 }} component="li" />
							<ListItem disablePadding>
								<ListItemButton onClick={() => navigate("/")}>
									<ListItemText primary="Characters" />
								</ListItemButton>
							</ListItem>
							<ListItem disablePadding>
								<ListItemButton onClick={() => navigate("/")}>
									<ListItemText primary="Locations" />
								</ListItemButton>
							</ListItem>
						</List>
					</Grid>
				</div>
			</div>
			<div
				id="desktop-layout-header"
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					height: 75,
				}}
			>
			</div>
			<Grid
				id="desktop-layout-view"
				sx={{
					top: 75,
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
	//const showBackButton = useMemo(() => location.pathname !== routes.sparkListPage, [location.pathname]);

	return (
		<div id="mobile-layout">
			<div id="mobile-layout-header">
				<AppBar position="absolute" style={{ backgroundColor: "#FFF", boxShadow: "none", height: 64 }}>
					<Toolbar>
						<>
							{/* { showBackButton && */}
							<IconButton
								color="inherit"
								aria-label="  "
								onClick={() => navigate(-1)}
								sx={{ color: "rgba(0,0,0,0.54)" }}
							>
								<ArrowBackIosNew />
							</IconButton>
							{/* } */}
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