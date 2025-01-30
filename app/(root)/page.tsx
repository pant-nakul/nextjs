import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

interface Author {
    _id : number, name:string
}

interface StartupTypeCard {
    _createdAt: Date,
    views: number,
    author : Author,
    _id : number,
    description : string,
    category : string,
    title : string,
    img : string,
}

export default async function Home({searchParams}: {searchParams?: Promise<{ query?: string }>}) {
    const query = (await searchParams)?.query;


    const posts = [
        {
            _createdAt: new Date(),
            views: 1001,
            author : {_id : 1, name: "Nakul"},
            _id : 1,
            description : "We are robots of future!",
            category : "Robots",
            title : "We Robots",
            img :"https://images.unsplash.com/photo-1621961458348-f013d219b50c"
        },
        {
            _createdAt: new Date(),
            views: 11,
            author : {_id : 2, name: "Ashish"},
            _id : 2,
            description : "We are lunatics of future!",
            category : "Lunatics",
            title : "Lunatics",
            img :"https://images.unsplash.com/photo-1621961458348-f013d219b50c"
        },
        {
            _createdAt: new Date(),
            views: 74,
            author : {_id : 3, name:"Pant"},
            _id : 3,
            description : "We are coins of future!",
            category : "Crypto Currency",
            title : "The Cryptos",
            img :"https://images.unsplash.com/photo-1621961458348-f013d219b50c"
        },
    ]

    return (
        <>
            <section className="pink_container">
                <h1 className="heading">
                    pitch your startup<br/>
                    connect with entrepreneurs
                </h1>
                <p className="sub-heading !max-w-3xl">
                    Submit Ideas, Vote on Pitches and get noticed in Virtual Competitions
                </p>
                <SearchForm query={query} />
            </section>
            <section className="section_container">
                <p className="text-30-semibold">
                    {query ? `Search results for "${query?.trim()}" ` : "All Startups"}
                </p>

                <ul className="mt-7 card_grid" key={"jhsgvdfjbgsajb"}>
                    {posts.length > 0 ? (posts.map((post: StartupTypeCard) => (
                        <StartupCard key={post?._id} post={post}  />
                    ))) : (
                        <p className="no-result">No startups found.</p>
                    )}
                </ul>

            </section>

        </>
    );
}
