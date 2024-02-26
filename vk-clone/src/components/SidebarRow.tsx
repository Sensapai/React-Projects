import Link from 'next/link';

type SidebarRowProps = {
    Icon: React.ComponentType<any>;
    title: string;
}

function SidebarRow({ title, Icon }: SidebarRowProps) {
    return (
        <Link href="/" className="h-[30px] pl-0.5 pr-1 w-[160px] flex items-center gap-2.5 hover:bg-gray-200 hover:rounded hover:cursor-pointer">
            <Icon className="w-[21px] h-[21px]" color="rgb(68, 123, 186)" />
            <span className="text-[13px] whitespace-nowrap flex-grow">{title}</span>
        </Link>
    )
}

export default SidebarRow;
