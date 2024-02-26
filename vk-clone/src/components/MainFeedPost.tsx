import { ArrowUturnRightIcon, ChatBubbleLeftIcon, EllipsisHorizontalIcon, EyeIcon, HeartIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

type PostProps = {
    id: number;
    name: string;
    src: string;
    postContent: string;
    contentAttachment: string;
    likes: number;
    comments: number;
    reposts: number;
    time: string | Date | any;
    views: string | number;
}

function MainFeedPost({
    id,
    name,
    src,
    postContent,
    contentAttachment,
    likes,
    comments,
    reposts,
    time,
    views
}: PostProps) {
    return (
        <div className="bg-white text-[13px] pt-4 pb-3 px-5 shadow rounded-xl">
            {/*PostHeader */}
            <div className="flex items-center">
                {/*Icon */}
                <div className='mr-3'>
                    <Link href="/" className=''>
                        <Image src={src}
                            width={40}
                            height={40}
                            className='rounded-full'
                            alt="profile-img" />
                    </Link>
                </div>
                {/*PostInfo */}
                <div className='flex-1 whitespace-nowrap mr-2.5'>
                    <div>
                        <h5 className='overflow-hidden text-ellipsis text-sky-700 font-medium '>
                            <span className='cursor-pointer hover:underline'>{name}</span>
                        </h5>
                    </div>
                    <div>
                        <time className='overflow-hidden text-ellipsis cursor-pointer hover:underline'>
                            <span className='text-gray-500'>{time}</span>
                        </time>
                    </div>
                </div>
                {/*PostActions */}
                <div>
                    {/*Icon */}
                    <span className='cursor-pointer'>
                        <EllipsisHorizontalIcon height={24} width={24} color='grey' />
                    </span>
                    {/*Menu */}
                    <div>

                    </div>
                </div>
            </div>
            {/*PostContent */}
            <div>
                <div>
                    {/*Post Text */}
                    <div className='pt-2 leading-normal overflow-hidden text-pretty'>{postContent}</div>
                    {/*Post Attachment*/}
                    <div>
                        <div className='mt-3'>
                            <Image src={contentAttachment}
                                width={510}
                                height={510}
                                className='rounded-lg outline outline-1 outline-gray-100 shadow'
                                alt="feed-group-1-post-img." />
                        </div>
                    </div>
                </div>
            </div>
            {/*Post Likes and Statistics*/}
            <div>
                <div className='flex items-center justify-between'>
                    {/*Buttons */}
                    <div className='py-3 flex items-center space-x-3'>
                        {/*Likes */}
                        <div className='flex items-center bg-gray-100 py-1 px-3 space-x-1 rounded-full cursor-pointer hover:bg-gray-200 transition'>
                            <HeartIcon height={24} width={24} color='grey' />
                            <span className='text-gray-500 font-semibold'>{likes}</span>
                        </div>
                        {/*Comments */}
                        <div className='flex items-center bg-gray-100 py-1 px-3 space-x-1 rounded-full cursor-pointer hover:bg-gray-200 transition'>
                            <ChatBubbleLeftIcon height={24} width={24} color='grey' />
                            <span className='text-gray-500 font-semibold'>{comments}</span>
                        </div>
                        {/*Reposts */}
                        <div className='flex items-center bg-gray-100 py-1 px-3 space-x-1 rounded-full cursor-pointer hover:bg-gray-200 transition'>
                            <ArrowUturnRightIcon height={24} width={24} color='grey' />
                            <span className='text-gray-500 font-semibold'>{reposts}</span>
                        </div>
                    </div>
                    {/*Statistics */}
                    <div>
                        <div className='flex items-center space-x-1'>
                            <span><EyeIcon height={14} width={14} color='grey' /></span>
                            <span className='text-gray-500'>{views}</span>
                        </div>
                    </div>
                </div>
            </div>
            {/*TODO: Do Replies section*/}
            <div>
                <div>
                    {/*Most intresting */}
                    <span></span>
                </div>
                {/*Replies */}
                <div>

                </div>
            </div>
            {/*Leave a comment */}
            <div className=''>
                <div className="flex items-center space-x-3">
                    <Link href="/">
                        <Image src="/profile-img.png"
                            width={34}
                            height={34}
                            className='rounded-full'
                            alt="profile-img" />
                    </Link>
                    <form className="m-0 flex flex-grow items-center space-x-5">
                        <input type="text" className="w-full outline outline-1 outline-gray-300 rounded-md py-1.5 pl-[13px] pr-[90px] text-[13px] placeholder:text-[13px]" placeholder="Leave a comment..." />
                        <button><PaperAirplaneIcon height={24} width={24} className='text-gray-300' /></button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default MainFeedPost