'use client';

interface HoverCardProps {
    title: string;
    description: string;
}

const HoverCard = ({ title, description }: HoverCardProps) => {
    return (
        <div
            className="h-[400px] max-md:h-[320px] w-[320px] max-md:w-[230px] flex-shrink-0 bg-stone-100 relative overflow-hidden"
        >
            {/* Overlay */}
            <div
                className="absolute inset-0 flex flex-col justify-center items-center px-4 text-white text-center opacity-0 hover:opacity-100 bg-transparent hover:bg-[rgba(0,0,0,0.4)] transition-all duration-300"
            >
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm">{description}</p>
                <button className="border-2 border-white text-white px-4 py-1 rounded-full cursor-pointer hover:bg-white hover:text-gray-700 transition-all duration-300 mt-5">View Product</button>

            </div>
        </div>
    );
};

export default HoverCard;