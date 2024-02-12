import Link from 'next/link';

type SidebarRowProps = {
    Icon: React.ComponentType<any>;
    title: string;
}

function SidebarRow({ title, Icon }: SidebarRowProps) {
    return (
        <Link href="/" className="h-[30px] px-0.5 flex items-center gap-2.5">
            <Icon className="w-5 h-5" color="rgb(68, 123, 186)" />
            <span className="text-[13px] whitespace-nowrap">{title}</span>
        </Link>
    )
}

export default SidebarRow;
