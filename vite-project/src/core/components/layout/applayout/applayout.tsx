import { Outlet } from "react-router-dom"
import { Footer } from "../../pages/footer/footer"
import { Header } from "../../pages/header/header"
import { Main } from "../../pages/main/main"
function AppLayout (){

    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}
export default AppLayout