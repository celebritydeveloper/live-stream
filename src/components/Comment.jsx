import Image from "next/image";
import user from "@/assets/images/user.jpeg";


function Comment({ comment }) {
    return (
        <div className="flex gap-3 mb-5 flex-shrink">
            <div className="h-[24px] w-[24px] rounded-full flex items-center justify-center">
                <Image src={user}  alt="" className="rounded-full w-full h-full object-cover" />
            </div>
            <div className="w-full">
                <p className="text-[11px] text-[#B4BECB]">{comment.name}</p>
                <p className="text-[11px] font-MatterRegular">{comment.comment}</p>
            </div>
        </div>
    );
}

export default Comment;