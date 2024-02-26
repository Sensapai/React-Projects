import Image from "next/image"
import Link from "next/link"

function FeedInputBox() {
    return (
        <div className="bg-white shadow">
            <div className="flex space-x-3 py-3 px-5 items-center">
                <Link href="/">
                    <Image src="/profile-img.png"
                        width={28}
                        height={28}
                        className='rounded-full'
                        alt="profile-img" />
                </Link>
                <form className="m-0 flex-grow ">
                    <input type="text" className="outline-none text-[13px] placeholder:text-[13px]" placeholder="What's new?" />
                </form>
            </div>
        </div>
    )
}

export default FeedInputBox