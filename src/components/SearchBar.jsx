import { useState } from "react";
import axios from "axios";
import { useAppDataContext } from "../contexts/AppDataContext";


export default function SearchBar() {
    const [search, setSearch] = useState("");

    const { setMovies, setTvShows } = useAppDataContext();

    const handleSearch = (e) => {
        e.preventDefault();

        axios
            .get("https://api.themoviedb.org/3/search/movie", {
                params: {
                    api_key: "35c60ed25326d9e87c67d8a711911478",
                    language: "en-US",
                    query: search,
                    include_adult: true,
                },
            })
            .then((res) => setMovies(res.data.results));

        axios
            .get("https://api.themoviedb.org/3/search/tv", {
                params: {
                    api_key: "35c60ed25326d9e87c67d8a711911478",
                    language: "en-US",
                    query: search,
                    include_adult: true,
                },
            })
            .then((res) => setTvShows(res.data.results));
    };

    return (
        <form onSubmit={handleSearch}>
            <input
                className="rounded-pill"
                name="search"
                type="search"
                placeholder="search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button
                className="rounded-pill"
                type="submit"
            >
                <i class="fa-solid fa-magnifying-glass">
                </i></button>
        </form>
    );
}