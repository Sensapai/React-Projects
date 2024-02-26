import MainFeedPost from "./MainFeedPost";


const feedPosts = [
    {
        id: 1,
        name: 'Рифмы и Панчи',
        time: 'two minutes ago',
        src: '/feed-group-1.jpg',
        postContent: "Кажется, Копатыч совсем ошалел и принес долгожданный «Vultures 1» на Яндекс Музыку. Tyga с новым треком тоже не остался в стороне.",
        contentAttachment: '/feed-group-2-post-img.jpg',
        likes: 16,
        comments: 6,
        reposts: 1,
        views: 875
    },
    {
        id: 2,
        name: 'РАЙЗ',
        time: 'two hours ago',
        src: '/feed-group-2.jpg',
        postContent: "Медиапроект, который смог.",
        contentAttachment: '/feed-group-3-post-img.jpg',
        likes: 1.005,
        comments: 41,
        reposts: 16,
        views: 55 + "K"
    },
    {
        id: 3,
        name: 'Рифмы и Панчи',
        time: 'one hour ago',
        src: '/feed-group-1.jpg',
        postContent: "😳 Мужик ПОДСЛУШАЛ разговор жены и заработал 1,8 МИЛЛИОНА ДОЛЛАРОВ — жена с ним развелась, а в суде он признал себя виновным в инсайдерской торговли.",
        contentAttachment: '/feed-group-1-post-img.jpg',
        likes: 363,
        comments: 41,
        reposts: 216,
        views: 130 + "K"
    },

]

function MainFeed() {
    return (
        <div>
            <div className="space-y-4">
                {feedPosts.map((post) => (
                    <MainFeedPost key={post.id} {...post} />
                ))}
            </div>
        </div>
    )
}

export default MainFeed