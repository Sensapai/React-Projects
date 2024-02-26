import FeedInputBox from "@/components/FeedInputBox"
import MainFeed from "@/components/MainFeed"
import Stories from "@/components/Stories"

function Feed() {
    return (
        <div className="max-w-[550px] w-full">
            <div className="*:rounded-xl *:mt-4">
                {/*Whats New? */}
                <FeedInputBox />
                {/*Stories */}
                <Stories />
                {/*Main Feed */}
                <MainFeed />
            </div>
        </div>
    )
}

export default Feed