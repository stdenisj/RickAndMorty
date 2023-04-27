import { Route, Routes } from "react-router-dom";
import { CharacterListPage } from "./CharacterListPage";
import { AppLayout } from "../../Layout/AppLayout";

export function CharacterPage(){
    return (
        <AppLayout>
            <Routes>
                <Route index element={<CharacterListPage />} />
            </Routes>
        </AppLayout>
    )
}