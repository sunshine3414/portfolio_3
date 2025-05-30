import { monsterRat, poppins, ubuntu } from "@/app/utils/Fonts";
import { IconFlower, IconMobileApt } from "@/icons";
import { IPhotography } from "@/interface";
import { Variants, motion } from "framer-motion";
import Image from "next/legacy/image";
import Link from "next/link";
import { Background } from "../ui/Background";
import AnimatedHeading from "../ui/AnimatedHeading";

const outerVariants = {
    open: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } },
    closed: { transition: { staggerChildren: 0.07, staggerDirection: -1 } }
};
const innerVariants: Variants = {
    open: { x: 0, y: 0, opacity: 1, transition: { type: 'spring', stiffness: 150 } },
    closed: { x: -200, y: 50, opacity: 0, }
};
const innerVariants2: Variants = {
    open: { x: 0, y: 0, opacity: 1, transition: { type: 'spring', stiffness: 150 } },
    closed: { x: 0, y: 100, opacity: 0, }
};

const Heading = {
    closed: { opacity: 0.5, },
    open: { opacity: 1, transition: { delay: 0.2, } }
}

export default function Hobby({ data, themeColor }: { data: IPhotography[], themeColor: string }) {

    return (
        <>
            <div className='myContainer py-[5rem] dark:text-gray-300 text-gray-700' style={ubuntu.style}>
                <motion.div initial='closed' whileInView='open' viewport={{ once: true, amount: 0.3 }} variants={outerVariants} className="flex flex-col justify-start">
                    <motion.div variants={Heading}>
                        <AnimatedHeading classList="tracking-wide text-lg uppercase" font={ubuntu} title='Blossoms' />
                        <h3 className="text-4xl md:text-5xl mb-4">
                            <span className="font-bold mr-2">Fragrance of</span>
                            my rooftop
                        </h3>
                        <p style={poppins.style} className='font-medium mt-4 max-w-[35rem]'>Being a versatile person, I have a pretty large list of my pastimes. One of the ones I enjoy doing is gardening and clicking on good photos of those with my cell phone.
                        </p>
                        <div className="flex flex-col justify-center gap-4 mt-2">
                            <Link className='font-semibold flex gap-2 items-center' href='https://www.motorola.in/smartphones-motorola-one-macro/p' target='_blank'>
                                <span style={ubuntu.style}>My device</span>
                                <IconMobileApt />
                                <span>-</span>
                                <span className="font-bold">Motorola One Macro</span>
                            </Link>
                        </div>
                    </motion.div>
                    {data && <div className="mt-4 mx-auto grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 w-fit">
                        {data.map((curr, index) => {
                            return (
                                <motion.div variants={innerVariants} key={index} className='noSelection w-fit h-fit relative flex p-1 border border-slate-800 rounded-sm'>
                                    <Image src={curr.url} height='480' width='360' alt='myHobby.png' className='rounded-sm lg:hover:scale-[1.03] duration-500' placeholder='blur' blurDataURL='/assets/image/imgPlaceholder.jpg' />
                                </motion.div>
                            )
                        })}
                    </div>}
                    <motion.div variants={innerVariants2} className="mt-6 mx-auto w-fit">
                        <Link href='/blossoms' className='text-lg font-semibold cursor-pointer px-4 py-2 bg-slate-600/10 dark:bg-white/20 rounded-md flex justify-center w-fit items-center gap-2 ' style={monsterRat.style}  scroll={false}>
                            <IconFlower style={{ color: themeColor }} />
                            <span>Show More</span>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
            {/* background */}
            <div className="absolute w-full h-full md:w-1/3 lg:w-1/2 top-0 right-0 -z-10">
                <div className='absolute w-full h-full inset-0 bg-gradient-to-r z-10 dark:from-[#000011] from-[#ffffff]'></div>
                <Background option='body' />
                <div className='absolute w-full h-full inset-0 bg-gradient-to-t z-10 dark:from-[#000011] from-[#ffffff]'></div>
            </div>
        </>
    )
}