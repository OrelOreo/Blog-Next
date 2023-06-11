import "bootstrap/dist/css/bootstrap.min.css"
import Container from "@/components/Container/Container"

function myApp({ Component, pageProps }) {
    return (
        <Container>
            <Component {...pageProps} />
        </Container>
    )
}

export default myApp