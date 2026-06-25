import Link from "next/link";

interface BtnSecondaryProps {
    text: string;
    prefixIcon?: React.ReactNode;
    suffixIcon?: React.ReactNode;
    href: string;
    className?: string;
}

export const BtnSecondary = ({ text, prefixIcon, suffixIcon, href, className }: BtnSecondaryProps) => {
    return (
        <Link target="_blank" href={href} className={`bg-primary/10  text-primary rounded-full px-5 h-[44px] flex items-center justify-center gap-2 hover:bg-primary/15 duration-300 ${className || ''}`}>
            {prefixIcon && <span>{prefixIcon}</span>}
            <span>{text}</span>
            {suffixIcon && <span>{suffixIcon}</span>}
        </Link>
    )
}
