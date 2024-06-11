import { useEffect, useState } from "react";
import { setUser } from "../utils/auth.js"

// Install Extension on VS code EJS language support   and    ES7+ React/Redocs
// Install Extension on VS code Excel viewer    and    django snippet

const MainWrapper = ({ children }) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const handler = async () => {
            setLoading(true)
            await setUser()
            setLoading(false)
        };

        handler();
    }, []);

    return <>{loading ? null : children}</>

}

export default MainWrapper