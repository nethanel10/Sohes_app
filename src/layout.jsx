import Navbar from "./components/navbar"

const Layout = ({children}) => {

    return (
        <>
            <Navbar/>
            {children}
        </>
    )
}

export default Layout