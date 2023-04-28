import { Route, Routes } from "react-router-dom";
import { AppLayout } from "../../Layout/AppLayout";
import { LocationListPage } from "./LocationListPage";
import { LocationDetailPage } from "./LocationDetailPage";

export function LocationPage(){
    return (
        <AppLayout>
            <Routes>
                <Route path={"/:id"} element={<LocationDetailPage />} />
                <Route index path="*" element={<LocationListPage />} />
            </Routes>
        </AppLayout>
    )
}