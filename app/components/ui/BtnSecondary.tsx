import Link from "next/link";

interface BtnSecondaryProps {
    text: string;
    prefixIcon?: React.ReactNode;
    suffixIcon?: React.ReactNode;
    href: string;
}

export const BtnSecondary = ({ text, prefixIcon, suffixIcon, href }: BtnSecondaryProps) => {
    return (
        <Link target="_blank" href={href} className='bg-primary/10  text-primary rounded-full px-5 h-12 flex items-center justify-center gap-2 hover:bg-primary/15 duration-300'>
            {prefixIcon && <span>{prefixIcon}</span>}
            <span>{text}</span>
            {suffixIcon && <span>{suffixIcon}</span>}
        </Link>
    )
}
