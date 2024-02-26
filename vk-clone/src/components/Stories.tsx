import StoryCard from "./StoryCard"

const stories = [
    {
        name: 'Martin',
        src: '/1.jpg',
    },
    {
        name: 'Cathie',
        src: '/2.jpg',
    },
    {
        name: 'Daniel',
        src: '/3.jpg',
    },
    {
        name: 'Misha',
        src: '/4.jpg',
    },
    {
        name: 'Gleb',
        src: '/5.jpg',
    },
]


function Stories() {
    return (
        <div className="bg-white shadow ">
            <div>
                <div className="text-[13px] pt-[17px] pl-5">Stories</div>
                <div className="flex space-x-2 px-5 pb-5 pt-[13px]">
                    {/*Card */}
                    {stories.map((story) => (
                        <StoryCard key={story.src} name={story.name} src={story.src} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Stories