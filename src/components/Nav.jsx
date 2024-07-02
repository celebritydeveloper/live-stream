import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/live-parte.png";
import gift from "@/assets/images/gift.svg";
import megaphone from "@/assets/images/megaphone.svg";


function Nav() {
    return (
        <nav className="flex items-center justify-between py-5 px-[5rem] w-full fixed top-0">
            <ul className="inline-flex items-center gap-16">
            <li>
                <Link href="/">
                <Image src={logo} width={190} height="auto" alt="Live Parte Logo" />
                </Link>
            </li>

            <li className="uppercase font-MDNichromeTest text-[22px]">Timeless tour - newyork</li>
            </ul>

            <ul className="inline-flex items-center gap-6">
            <li>
                <button className="capitalize inline-flex gap-2 items-center min-h-[32px] min-w-[110px] bg-[#BACFF7] bg-opacity-5 rounded-[8px]
                py-[6px] px-[12px] border-2 border-[#BACFF7] border-opacity-10 shadow-md">
                <Image src={gift} alt="" />
                <span className="text-[13px] font-medium MatterMediume">Gift ticket</span>
                </button>
            </li>

            <li>
                <button className="capitalize inline-flex gap-2 items-center min-h-[32px] min-w-[110px] bg-[#BACFF7] bg-opacity-5 rounded-[8px]
                py-[6px] px-[12px] border-2 border-[#BACFF7] border-opacity-10 shadow-md">
                <Image src={megaphone} alt="" />
                <span className="text-[13px] font-medium MatterMedium">Share event</span>
                </button>
            </li>

            <li>
                <button className="inline-flex gap-2 items-center justify-center min-h-[32px] min-w-[110px] bg-[#FA4354] rounded-[8px] py-[5px] px-[20px]">
                <span className="text-[13px] font-medium MatterMedium">Leave</span>
                </button>
            </li>
            </ul>
        </nav>
    );
}

export default Nav;