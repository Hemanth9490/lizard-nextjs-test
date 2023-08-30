'use client';
import Image from 'next/image';
import { FiSearch, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';

const SensorListItemDetails = ({ sensor, trigger }) => {
    return (
        <div className="flex justify-between bg-inherit px-6 py-6 border border-slate-200 rounded shaodow-sm">
            {/* left content */}
            <div className="flex gap-4">
                {/* image */}
                <div className="flex flex-col gap-2">
                    <img
                        src="https://images.unsplash.com/photo-1534723452862-4c874018d66d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        alt="store_img"
                        className="h-36 w-44 rounded object-cover"
                    />
                    <div className="relative flex justify-around">
                        <div className="text-subtitle-50 absolute -left-3 top-4 rounded-full border border-slate-300 bg-white shadow-sm">
                            <FiChevronLeft />
                        </div>
                        <img
                            src="https://images.unsplash.com/photo-1534723452862-4c874018d66d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                            alt="store_img"
                            className="h-14 w-14 rounded object-cover"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1534723452862-4c874018d66d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                            alt="store_img"
                            className="h-14 w-14 rounded object-cover"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1534723452862-4c874018d66d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                            alt="store_img"
                            className="h-14 w-14 rounded object-cover"
                        />
                        <div className="text-subtitle-50 absolute -right-3 top-4 rounded-full border border-slate-300 bg-white shadow-sm">
                            <FiChevronRight />
                        </div>
                    </div>
                </div>
                {/* details: this section shows the sensor list item details */}
                <div className="flex flex-col justify-between gap-2">
                    <div className="flex flex-col gap-1">
                        {/* sensor main detail */}
                        <p className="flex items-center gap-2 text-display-60 font-medium capitalize">
                            {sensor.name}
                            <span className="text-body-20 capitalize px-4 py-1 bg-green-100 rounded-full text-green-800">
                                active
                            </span>
                        </p>
                        <p className="flex gap-1 items-center text-slate-400 ">
                            Emerson Sensor (Air and Product){' '}
                            <span className="h-[6px] w-[6px] rounded-full bg-slate-500"></span>{' '}
                            Logging{' '}
                            <span className="h-[6px] w-[6px] rounded-full bg-slate-500"></span>{' '}
                            POG: Other name
                        </p>
                        <p className="flex gap-1">
                            <span className="px-3 text-subtitle-20 font-medium text-sky-400 border rounded border-sky-400 py-[2px]">
                                GSF Frozen Product Temp
                            </span>{' '}
                            <span className="px-3 text-subtitle-20 font-medium text-yellow-600 border rounded border-yellow-400 py-[2px]">
                                GSF Frozen Product Temp
                            </span>
                        </p>
                        <p className="flex items-center gap-2 text-subtitle-20 font-medium">
                            Triggers:{" "}
                            {/* <span className="flex items-center gap-2 text-sky-600">
                                <span className="text-subtitle-10">
                                    <FaPhoneAlt />
                                </span>{' '}
                                after 2.5 deg-hrs
                                <span className="text-subtitle-10">
                                    <FaPhoneAlt />
                                </span>{' '}
                                after 2.5 deg-hrs
                            </span> */}

                            <span className='flex' dangerouslySetInnerHTML={{ __html: trigger }} />;

                        </p>
                        <p className="flex items-center gap-2 text-subtitle-20 font-medium">
                            Battery Status:
                            <span className="flex items-center gap-1 text-green-600">
                                <span className="h-3 w-3 rounded-full bg-green-500"></span>
                                Healthy
                            </span>
                        </p>
                    </div>
                    <div className="flex gap-8 items-center">
                        {/* product temp */}
                        <p className="text-red-500 text-display-80 font-medium leading-tight">
                            40.9 °F
                        </p>
                        <p className="flex flex-col text-subtitle-20 text-slate-500 leading-tight">
                            Air Flow{' '}
                            <span className="text-subtitle-50 text-red-500 font-medium">
                                40.9 °F
                            </span>
                        </p>
                        <p className="flex flex-col text-subtitle-20 text-slate-500 leading-tight">
                            Exposure
                            <span className="text-subtitle-50 text-gray-950 font-medium">
                                80.09 deg-hrs
                            </span>
                        </p>
                        <p className="flex flex-col text-subtitle-20 text-slate-500 leading-tight">
                            Sage Range
                            <span className="text-subtitle-50 text-gray-950 font-medium">
                                20 °F to 39 °F
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            {/* right content */}
            <div className="flex flex-col justify-between items-end">
                <button className="w-min flex items-center gap-2 font-medium text-slate-600 bg-slate-100 px-3 py-1 border border-slate-300 rounded">
                    <MdEdit /> Edit
                </button>
                <div className="text-right text-body-20 mb-2">
                    <p className="text-slate-600">updated 4 min ago</p>
                    <p className="text-slate-400">last alarmed 7 days ago</p>
                </div>
            </div>
        </div >
    );
};

export default function SensorList({ sensorsList, data }) {
    console.log(data, 'data--------------');
    return (
        <div className="flex min-h-[480px] w-full flex-col gap-4 rounded border border-slate-200 bg-white px-7 py-5 shadow-md shadow-slate-100">
            <div className="flex justify-between">
                <p className="text-body-50 flex items-center justify-center gap-2 font-semibold">
                    Sensors{' '}
                    <span className="text-body-30 bg-brand-600 rounded p-1 px-2 text-white">
                        {sensorsList.length}
                    </span>
                </p>
                {/* Search Box */}
                <div className="relative flex w-96 items-center justify-start">
                    <p className="absolute ms-2 w-10 text-slate-400">
                        <FiSearch />
                    </p>
                    <input
                        className="placeholder:text-quote-20 w-full rounded border border-slate-200 bg-slate-50 px-4 py-1 ps-7 duration-300 ease-in placeholder:italic placeholder:text-slate-400 focus-within:outline-none hover:cursor-pointer focus:bg-white focus:outline-none"
                        type="search"
                        placeholder="search sensors..."
                        name="Location"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-4">
                {sensorsList.map((eachSensor, index) => (
                    <SensorListItemDetails key={index} sensor={eachSensor} trigger={data.alertSettingTriggersHTMLList[index]} />
                ))}
            </div>
        </div>
    );
}
