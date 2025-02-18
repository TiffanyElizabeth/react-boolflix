import { useAppDataContext } from "../contexts/AppDataContext";

const countryFlags = {
    en: "https://flagcdn.com/w40/us.png",
    de: "https://flagcdn.com/w40/de.png",
    fr: "https://flagcdn.com/w40/fr.png",
    es: "https://flagcdn.com/w40/es.png",
    it: "https://flagcdn.com/w40/it.png",
};

export default function Main() {
    const { movies, tvShows } = useAppDataContext();

    const getFlag = (language) => {
        const flagLink = countryFlags[language] || "https://flagcdn.com/w40/un.png";
        return <img src={flagLink} alt={language} />
    };

    const getRating = (rating) => {
        return Math.round(rating / 2);
    };

    const getPoster = (posterPath) => {
        if (!posterPath) return null;
        const placeholder = "https://image.tmdb.org/t/p/";
        return `${placeholder}${posterPath}`;
    }

    return (
        <main className="bg-black text-white">
            <div className="container p-3">
                <h2>Films</h2>
                <div className="row g-3">
                    {movies.map((movie) => {
                        const rating = getRating(movie.vote_average);

                        return (
                            <div key={movie.id} className="col-lg-2 col-sm-6">
                                <div className="card h-100 bg-secondary">
                                    <div className="card-body">
                                        <h5 className="card-title">{movie.title}</h5>
                                        {movie.poster_path && (<img src={getPoster(movie.poster_path)} alt={`${movie.title} poster`} />)}
                                        <h6 className="card-subtitle text-muted">
                                            Original Title: {movie.original_title}
                                        </h6>
                                        <div>
                                            {getFlag(movie.original_language)} ({movie.original_language})
                                        </div>
                                        <div className="mt-2">
                                            {[...Array(5)].map((_, index) => (
                                                <i
                                                    key={index}
                                                    className={
                                                        index < rating
                                                            ? "fa-solid fa-star text-warning"
                                                            : "fa-regular fa-star text-secondary"
                                                    }
                                                    aria-hidden="true"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>



            <div className="container p-3">
                <h2> TV Shows </h2>
                <div className="row g-3">
                    {tvShows.map((show) => {
                        const rating = getRating(show.vote_average);

                        return (
                            <div key={show.id} className="col-lg-2 col-sm-6">
                                <div className="card h-100" >
                                    <div className="card-body">
                                        <h5 className="card-title">{show.name}</h5>
                                        {show.poster_path && (<img src={getPoster(show.poster_path)} alt={`${show.title} poster`} />)}
                                        <h6 className="card-subtitle text-muted">
                                            Original Title: {show.original_name}
                                        </h6>
                                        <div>
                                            {getFlag(show.original_language)} ({show.original_language})
                                        </div>
                                        <div className="mt-2">
                                            {[...Array(5)].map((_, index) => (
                                                <i
                                                    key={index}
                                                    className={
                                                        index < rating
                                                            ? "fa-solid fa-star text-warning"
                                                            : "fa-regular fa-star text-secondary"
                                                    }
                                                    aria-hidden="true"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </main >
    )
}