import { routers } from "../../components/routers";
import { useRoutes } from "react-router-dom";

function AllRouter() {
    const element = useRoutes(routers)
    return (
        <>
            {element}
        </>
    )
}
export default AllRouter;