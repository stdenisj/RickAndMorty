import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { isMobile } from "../../Hooks/isMobile";
import { CharacterService } from "../../Utilities/CharacterService";
import { useMemo, useState } from "react"
import { Characters, QueryCharactersArgs } from "__generated__/graphql";
import { TypedDocumentNode, gql } from "@apollo/client";

const Get_Characters: TypedDocumentNode<Characters, QueryCharactersArgs> = gql`
    query GetCharacters($page: Int!, $filter: FilterCharacter)
    {
        characters(page: $page, filter: $filter) {
            results {
                id
                name
                image
            }
        }
    }
`;

export function CharacterListPage(){
    const mobile = isMobile();

    const [pageNumber, setPageNumber] = useState(1)
    const { loading, data } = CharacterService.getCharacters(pageNumber);
    const characterData = useMemo(() => data ? data!.results! : null, [data, loading])

    if(characterData)
        console.log(characterData)

    return (
        <Grid container sx={{ p: mobile ? 2 : 0 }} justifyContent={mobile ? "center" : "normal"} spacing={2}>
            { data?.results?.map(c => {
                return (
                    <Grid item id={c!.id!} xs={12} sm={6} md={4} lg={3}>
                        <Card>
                            <CardMedia image={c!.image!} component="img" width={300} height={300} />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    sx={{
                                        textOverflow: "ellipsis",
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                    }}
                                >
                                    {c!.name}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                );
            })
            }
        </Grid>
    )
}