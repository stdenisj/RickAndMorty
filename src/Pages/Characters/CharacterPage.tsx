import { Route, Routes } from "react-router-dom";
import { CharacterListPage } from "./CharacterListPage";
import { AppLayout } from "../../Layout/AppLayout";
import { CharacterDetailPage } from "./CharacterDetailPage";

export function CharacterPage(){
    return (
        <AppLayout>
            <Routes>
                <Route path={"/:id"} element={<CharacterDetailPage />} />
                <Route index path="*" element={<CharacterListPage />} />
            </Routes>
        </AppLayout>
    )
}