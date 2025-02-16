import SearchBar from "./SearchBar"

export default function Header() {
    return (
        <header className="bg-black d-flex justify-content-between align-items-center p-3">
            <h1 className="text-danger">Boolflix</h1>
            <SearchBar />
        </header>
    )
}