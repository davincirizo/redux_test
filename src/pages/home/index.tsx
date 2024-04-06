import { Button, Container } from "@mui/material"
import { useHomePage } from "./hooks"


export const HomePage: React.FC<{}> = () => {
    const {
        actions: {
            handleClik
        }
    } = useHomePage()
    
    return (
        <Container sx={{ mt: 9 }} maxWidth="xl">
            <Button onClick={handleClik}
            variant='contained'>
                HomePage
            </Button>
        </Container>
    )
}