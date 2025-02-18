import { createContext, useContext, useState } from "react";

const appDataContext = createContext()

function AppDataProvider({ children }) {
    const [movies, setMovies] = useState([]);
    const [tvShows, setTvShows] = useState([]);

    return (
        <appDataContext.Provider value={{ movies, setMovies, tvShows, setTvShows }}>{children}</appDataContext.Provider>
    )
};

function useAppDataContext() {
    const context = useContext(appDataContext)
    return context
}

export { AppDataProvider, useAppDataContext }