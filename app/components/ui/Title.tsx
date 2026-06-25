import React from 'react'

interface TitleProps {
    title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
    return (
        <div className="inline-block md:mb-12 mb-8">
            <h3 className="text-2xl font-bold">{title}</h3>
            <span className="block h-1 w-[60%] rounded-full bg-yellow-600 mt-1 shadow-[0_0_12px_rgba(250,204,21,0.3)]" />
        </div>
    )
}

export default Title
