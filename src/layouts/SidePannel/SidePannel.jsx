import { MdGroupWork } from "react-icons/md";
import { SiMarketo } from "react-icons/si";
import { FaCode, FaRegFolder } from "react-icons/fa6";
import { IoIosArrowDropdownCircle, IoMdAdd, IoMdAddCircleOutline } from "react-icons/io";

export default function SidePannel() {
    return (
        <main className="lg:w-[400px] border-2 rounded-2xl py-2 px-3">
            <section id="profile" className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-x-3">
                    <figure>
                        <img src={"https://seeklogo.com/images/T/trello-logo-CE7B690E34-seeklogo.com.png"} width={40} alt="" />
                    </figure>
                    <div >
                        <h3>INC</h3>
                        <h4>InovateHub</h4>
                    </div>
                </div>
                <div>
                    <div className="avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className=" divide-y border-2 rounded-2xl *:py-2 *:px-3 *:cursor-pointer">
                    <div className="TeamCard flex flex-row justify-between items-center">
                        <div className="flex flex-row w-full gap-x-3">
                            <figure>
                                <MdGroupWork size={25} />
                            </figure>
                            <h2>
                                Design Team
                            </h2>
                        </div>
                        <div className="btn btn-sm bg-base-300">
                            X - 1
                        </div>
                    </div>
                    <div className="TeamCard flex flex-row justify-between items-center">
                        <div className="flex flex-row w-full gap-x-3">
                            <figure>
                                <SiMarketo size={25} />
                            </figure>
                            <h2>
                                Marketing Team
                            </h2>
                        </div>
                        <div className="btn btn-sm bg-base-300">
                            X - 1
                        </div>
                    </div>
                    <div className="TeamCard flex flex-row justify-between items-center">
                        <div className="flex flex-row w-full gap-x-3">
                            <figure>
                                <FaCode size={25} />
                            </figure>
                            <h2>
                                Design Team
                            </h2>
                        </div>
                        <div className="btn btn-sm bg-base-300">
                            X - 1
                        </div>
                    </div>
                    <div className="TeamCard flex flex-row justify-between items-center ">
                        <div className="flex flex-row w-full gap-x-3">
                            <figure>
                                <IoMdAddCircleOutline size={25} />
                            </figure>
                            <h2 className="text-gray-400">
                                Create Team
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-1 pt-6">
                <div className="flex justify-between items-center">
                    <h2>
                        FOLDERS
                    </h2>
                    <div className="btn btn-ghost btn-sm btn-square">
                        <IoMdAdd size={25} />
                    </div>
                </div>
                <div className=" flex flex-row justify-between items-center hover:bg-base-300  py-3 px-4">
                    <div className="flex flex-row w-full gap-x-3">
                        <figure>
                            <FaRegFolder size={20} />
                        </figure>
                        <h2>
                            Products
                        </h2>
                    </div>
                    <div className="">
                        <IoIosArrowDropdownCircle />
                    </div>
                </div>
            </section>
        </main>
    )
}
