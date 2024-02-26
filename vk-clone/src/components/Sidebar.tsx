import { BookmarkIcon, ChartBarSquareIcon, ChatBubbleOvalLeftIcon, CurrencyDollarIcon, DocumentIcon, FaceSmileIcon, FilmIcon, MegaphoneIcon, MusicalNoteIcon, NewspaperIcon, PhoneIcon, PhotoIcon, PuzzlePieceIcon, ShoppingBagIcon, SquaresPlusIcon, UserCircleIcon, UserGroupIcon, UsersIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import SidebarRow from "./SidebarRow"

function Sidebar() {
    return (
        <div className="w-[164px] pt-3.5">
            <nav>
                <ol className="">
                    <li><SidebarRow Icon={UserCircleIcon} title="My profile" /></li>
                    <li><SidebarRow Icon={NewspaperIcon} title="News" /></li>
                    <li><SidebarRow Icon={ChatBubbleOvalLeftIcon} title="Messenger" /></li>
                    <li><SidebarRow Icon={PhoneIcon} title="Calls" /></li>
                    <li><SidebarRow Icon={UsersIcon} title="Friends" /></li>
                    <li><SidebarRow Icon={UserGroupIcon} title="Communities" /></li>
                    <li><SidebarRow Icon={PhotoIcon} title="Photos" /></li>
                    <li><SidebarRow Icon={MusicalNoteIcon} title="Music" /></li>
                    <li><SidebarRow Icon={FilmIcon} title="Videos" /></li>
                    <li><SidebarRow Icon={ChartBarSquareIcon} title="Clips" /></li>
                    <li><SidebarRow Icon={PuzzlePieceIcon} title="Games" /></li>
                    <li><SidebarRow Icon={FaceSmileIcon} title="Stickers" /></li>
                    <li><SidebarRow Icon={ShoppingBagIcon} title="Market" /></li>
                    <div className="mt-2.5 mr-2 mb-2.5 ml-9">
                        <hr />
                    </div>
                    <li><SidebarRow Icon={SquaresPlusIcon} title="Mini apps" /></li>
                    <li><SidebarRow Icon={CurrencyDollarIcon} title="VK Pay" /></li>
                    <div className="mt-2.5 mr-2 mb-2.5 ml-9">
                        <hr />
                    </div>
                    <li><SidebarRow Icon={BookmarkIcon} title="Bookmarks" /></li>
                    <li><SidebarRow Icon={DocumentIcon} title="Files" /></li>
                    <li><SidebarRow Icon={MegaphoneIcon} title="Ads" /></li>
                    <div className="mt-3.5 mr-2">
                        <hr />
                    </div>
                </ol>
                <div className="flex flex-wrap mr-4 pt-4 *:text-xs *:pr-2.5 *:text-gray-400 *:whitespace-nowrap hover:*:underline">
                    <Link href="/">Blog</Link>
                    <Link href="/">Developers</Link>
                    <Link href="/">Creators</Link>
                    <Link href="/">About VK</Link>
                    <Link href="/">More</Link>
                </div>
                <div className="mt-3.5 mr-2 mb-3.5">
                    <hr />
                </div>
                <div className="hover:*:underline">
                    <Link className="inline-block text-gray-400 text-xs" href="/">Recommendation technologies used</Link>
                </div>
            </nav>
        </div>
    )
}

export default Sidebar