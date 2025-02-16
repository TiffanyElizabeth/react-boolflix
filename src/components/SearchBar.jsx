export default function SearchBar() {
    return (
        <form>
            <input className="rounded-pill" name="search" type="search" placeholder="search..." />
            <button className="rounded-pill" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
        </form>
    )
}