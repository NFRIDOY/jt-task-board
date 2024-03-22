import { MdGroupWork } from "react-icons/md";
import { SiMarketo } from "react-icons/si";
import { FaCode, FaRegFolder } from "react-icons/fa6";
import { IoIosArrowDropdownCircle, IoMdAdd, IoMdAddCircleOutline } from "react-icons/io";
import { TiUserAdd } from "react-icons/ti";
import { GoQuestion } from "react-icons/go";
import { IoIosHelp } from "react-icons/io";

export default function SidePannel() {
    return (
        <main className="lg:w-[400px] lg:max-h-[100vh] border-2 rounded-2xl py-2 px-3">
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
            <section className="px-1 pt-6 *:border-0">
                <div className="flex justify-between items-center">
                    <h2>
                        FOLDERS
                    </h2>
                    <div className="btn btn-ghost btn-sm btn-square">
                        <IoMdAdd size={25} />
                    </div>
                </div>
                <details className="dropdown w-full border-0">
                    <summary className=" flex flex-row justify-between items-center hover:bg-base-300  py-3 px-4 rounded-2xl w-full border-0">
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
                    </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-full">
                        <li><a>Roadmap</a></li>
                        <li><a>Feedback</a></li>
                        <li><a>Performance</a></li>
                        <li><a>Team</a></li>
                        <li><a>Analysis</a></li>
                        <li>
                            <a>
                                <div className="flexF">
                                    <div className="btn btn-ghost btn-sm btn-square">
                                        <IoMdAdd size={25} />
                                    </div>
                                    <h2 className="text-gray-400">
                                        Add new sub
                                    </h2>
                                </div>
                            </a>
                        </li>
                    </ul>
                </details>
                <details className="dropdown w-full border-0">
                    <summary className=" flex flex-row justify-between items-center hover:bg-base-300  py-3 px-4 rounded-2xl w-full border-0">
                        <div className="flex flex-row w-full gap-x-3">
                            <figure>
                                <FaRegFolder size={20} />
                            </figure>
                            <h2>
                                Sales
                            </h2>
                        </div>
                        <div className="">
                            <IoIosArrowDropdownCircle />
                        </div>
                    </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-full">
                        <li><a>Roadmap</a></li>
                        <li><a>Feedback</a></li>
                        <li><a>Performance</a></li>
                        <li><a>Team</a></li>
                        <li><a>Analysis</a></li>
                        <li>
                            <a>
                                <div className="flexF">
                                    <div className="btn btn-ghost btn-sm btn-square">
                                        <IoMdAdd size={25} />
                                    </div>
                                    <h2 className="text-gray-400">
                                        Add new sub
                                    </h2>
                                </div>
                            </a>
                        </li>
                    </ul>
                </details>
                <details className="dropdown w-full">
                    <summary className=" flex flex-row justify-between items-center hover:bg-base-300  py-3 px-4 rounded-2xl w-full border-0">
                        <div className="flex flex-row w-full gap-x-3">
                            <figure>
                                <FaRegFolder size={20} />
                            </figure>
                            <h2>
                                Design
                            </h2>
                        </div>
                        <div className="">
                            <IoIosArrowDropdownCircle />
                        </div>
                    </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-full">
                        <li><a>Roadmap</a></li>
                        <li><a>Feedback</a></li>
                        <li><a>Performance</a></li>
                        <li><a>Team</a></li>
                        <li><a>Analysis</a></li>
                        <li>
                            <a>
                                <div className="flexF">
                                    <div className="btn btn-ghost btn-sm btn-square">
                                        <IoMdAdd size={25} />
                                    </div>
                                    <h2 className="text-gray-400">
                                        Add new sub
                                    </h2>
                                </div>
                            </a>
                        </li>
                    </ul>
                </details>
                <details className="dropdown w-full">
                    <summary className=" flex flex-row justify-between items-center hover:bg-base-300  py-3 px-4 rounded-2xl w-full border-0">
                        <div className="flex flex-row w-full gap-x-3">
                            <figure>
                                <FaRegFolder size={20} />
                            </figure>
                            <h2>
                                Office
                            </h2>
                        </div>
                        <div className="">
                            <IoIosArrowDropdownCircle />
                        </div>
                    </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-full">
                        <li><a>Roadmap</a></li>
                        <li><a>Feedback</a></li>
                        <li><a>Performance</a></li>
                        <li><a>Team</a></li>
                        <li><a>Analysis</a></li>
                        <li>
                            <a>
                                <div className="flexF">
                                    <div className="btn btn-ghost btn-sm btn-square">
                                        <IoMdAdd size={25} />
                                    </div>
                                    <h2 className="text-gray-400">
                                        Add new sub
                                    </h2>
                                </div>
                            </a>
                        </li>
                    </ul>
                </details>
                <details className="dropdown w-full">
                    <summary className=" flex flex-row justify-between items-center hover:bg-base-300  py-3 px-4 rounded-2xl w-full border-0">
                        <div className="flex flex-row w-full gap-x-3">
                            <figure>
                                <FaRegFolder size={20} />
                            </figure>
                            <h2>
                                Legal
                            </h2>
                        </div>
                        <div className="">
                            <IoIosArrowDropdownCircle />
                        </div>
                    </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-full">
                        <li><a>Roadmap</a></li>
                        <li><a>Feedback</a></li>
                        <li><a>Performance</a></li>
                        <li><a>Team</a></li>
                        <li><a>Analysis</a></li>
                        <li>
                            <a>
                                <div className="flexF">
                                    <div className="btn btn-ghost btn-sm btn-square">
                                        <IoMdAdd size={25} />
                                    </div>
                                    <h2 className="text-gray-400">
                                        Add new sub
                                    </h2>
                                </div>
                            </a>
                        </li>
                    </ul>
                </details>
            </section>
            <section className="flex flex-col mt-10 ">
                <div className="TeamCard flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center w-full gap-x-3">
                        <figure>
                            <TiUserAdd size={15} />
                        </figure>
                        <h2>
                            Invite Teammates
                        </h2>
                    </div>
                </div>
                <div className="TeamCard flex flex-row justify-between items-center">
                    <div className="flex justify-start items-center flex-row w-full gap-x-3">
                        <figure>
                            <GoQuestion size={15} />
                        </figure>
                        <div>
                            <h2>
                                Help and first steps
                            </h2>
                        </div>
                    </div>
                    <div>
                        <GoQuestion size={15} />
                    </div>
                </div>
                <div className="TeamCard flex flex-row justify-between items-center">
                    <div className="flex justify-start items-center flex-row w-full gap-x-3">
                        <figure>
                            <GoQuestion size={15} />
                        </figure>
                        <h2>
                            Days left on trial
                        </h2>
                    </div>
                    <div>
                        <button className="bg-black text-white hover:bg-blue-800 text-xs h-8 w-20 rounded-lg"> Add Billing</button>
                    </div>
                </div>
            </section>
        </main>
    )
}
