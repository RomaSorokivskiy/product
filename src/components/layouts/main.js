import Head from "next/head";
import Navbar from '../navbar'
import {Box,Container} from "@chakra-ui/react";

const Main = ({children, router}) =>{
    return(
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Product - Homepage</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="1400px" p={0}>
                {children}
            </Container>
        </Box>
    )
}
export default Main
