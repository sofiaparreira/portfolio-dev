import Link from "next/link";

interface BtnPrimaryProps {
    text: string;
    prefixIcon?: React.ReactNode;
    suffixIcon?: React.ReactNode;
    href: string;
    className?: string;
}

export const BtnPrimary = ({ text, prefixIcon, suffixIcon, href, className }: BtnPrimaryProps) => {
    return (
        <Link target="_blank" href={href} className={`bg-primary text-white rounded-full px-5 h-[44px] flex items-center justify-center gap-2 hover:bg-primary-hover duration-300 ${className || ''}`}>
            {prefixIcon && <span>{prefixIcon}</span>}
            <span>{text}</span>
            {suffixIcon && <span>{suffixIcon}</span>}
        </Link>
    )
}
