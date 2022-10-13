import { useState, useEffect } from "react";

const Route = ({ path, children }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    useEffect(() => {
        const onLocationchange = () => {
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener('popstate', onLocationchange);

        return () => {
            window.removeEventListener('popstate', onLocationchange);
        }
    }, []);
    return window.location.pathname === path ? children : null;
}

export default Route;