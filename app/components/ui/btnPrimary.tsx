import Link from "next/link";

interface BtnPrimaryProps {
    text: string;
    prefixIcon?: React.ReactNode;
    suffixIcon?: React.ReactNode;
    href: string;
}

export const BtnPrimary = ({ text, prefixIcon, suffixIcon, href }: BtnPrimaryProps) => {
    return (
        <Link target="_blank" href={href} className='bg-primary text-white rounded-full px-5 h-12 flex items-center justify-center gap-2 hover:bg-primary-hover duration-300'>
            {prefixIcon && <span>{prefixIcon}</span>}
            <span>{text}</span>
            {suffixIcon && <span>{suffixIcon}</span>}
        </Link>
    )
}
