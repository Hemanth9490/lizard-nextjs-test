import { SensorListItemDetails } from "@/components/sensorList"
import { MdEdit, MdSettings } from "react-icons/md"
import { FiSearch } from "react-icons/fi"

import ChartComponent from "@/components/graph"


const AlertCard = () => {
  return (
    <div class="flex flex-col gap-4 mx-4 border rounded py-3">
      <div class="flex items-center justify-between px-4">
        <div class="flex flex-wrap items-start gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-10 w-10 rounded-full bg-red-50 p-2 text-red-600">
            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clip-rule="evenodd" />
          </svg>
          <p class="flex flex-col"><span class="text-title-50 font-medium text-slate-800">7.2 degree-hrs of exposure</span><span class="text-body-20 text-slate-500">15th Aug 2022, 04:43 AM</span></p>
          <p class="mt-1 w-min rounded-full border border-red-500 bg-red-50 px-4 font-medium text-red-500">Active</p>
        </div>
        <div class="flex flex-col">
          <p class="text-body-20 font-medium text-slate-500">Notification</p>
          <p class="text-body-20 font-medium text-sky-500">icon - Aug 18th 2023 at 04:45 AM</p>
        </div>
        <button class="flex h-min items-center gap-2 rounded border border-slate-300 bg-slate-100 px-3 py-1 text-body-10 font-medium text-slate-600">Show Graph Data</button>
      </div>
      <hr />
      <div class="bg-red-50 mx-4 py-1">
        
      </div>
    </div>
  )
}

export default function SensorDetailsPage(){
  const sensorDetails = {
    name: "Hello Sensor"
  }

  return (
    <div className="flex flex-col gap-4">
      <SensorListItemDetails sensor={sensorDetails}  />
      {/* graph with filters */}
      <div class="flex flex-col gap-3 rounded border bg-white py-5">
        <div class="flex items-center justify-between px-7">
          <p class="font-medium text-title-50">Sensor Reading</p>
          {/* <button class="flex items-center gap-2 rounded border border-slate-300 bg-slate-100 px-5 py-1 text-body-20 text-slate-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download
          </button> */}
          <button className="w-min flex items-center gap-2 font-medium text-slate-600 bg-slate-100 px-3 py-1 border border-slate-300 rounded">
            <MdEdit /> Download
          </button>
        </div>
        <hr />
        <div className="flex items-center justify-between px-7">
          <div className="flex items-center gap-4">
            <span className="flex gap-1 rounded border bg-white p-1 font-medium text-slate-500">
              <button className="rounded bg-brand-500 px-2 text-white hover:bg-brand-600">D</button>
              <button className="rounded px-2 hover:bg-slate-100">M</button>
              <button className="rounded px-2 hover:bg-slate-100">Y</button>
            </span>
            <p className="flex items-center gap-3">Date Range <input type="datetime" name="start-time" id="start" placeholder="12/06/2023, 07:00 AM" className="rounded border border-slate-300 px-2 py-1 hover:border-slate-400 hover:bg-slate-50 focus:outline-none" /> - <input type="datetime" name="start-time" id="start" placeholder="12/06/2023, 07:00 AM" className="rounded border border-slate-300 px-2 py-1 hover:border-slate-400 hover:bg-slate-50 focus:outline-none" /><button className="flex items-center gap-2 rounded border border-slate-300 bg-slate-100 px-5 py-1 text-body-20 font-medium text-slate-600">Submit</button></p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 rounded border px-3 py-1 text-body-20 text-slate-800 hover:border-slate-300 hover:bg-slate-50">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              12 months
            </button>
            <button className="flex items-center gap-2 rounded border px-3 py-1 text-body-20 text-slate-800 hover:border-slate-300 hover:bg-slate-50">
              12 months<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
            <button className="rounded border px-3 py-1 text-body-20 text-slate-800 hover:border-slate-300 hover:bg-slate-50">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
              </svg>
            </button>
            <button className="rounded border px-3 py-1 text-body-20 text-slate-800 hover:border-slate-300 hover:bg-slate-50">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM13.5 10.5h-6" />
              </svg>
            </button>
          </div>
        </div>
        <hr />
        <ChartComponent />
      </div>
      <div class="bg-white p-4 dark:bg-gray-800 rounded border">
      <div class="relative flex flex-wrap items-start gap-4 md:flex-nowrap">
        {/* <!-- First child div --> */}
        <div class="flex w-full flex-col gap-2 rounded border bg-white py-4 dark:bg-gray-700 md:w-3/4">
          <div class="flex items-center justify-between px-4">
            <p class="text-body-40 font-medium">Alerts</p>
            <div class="flex gap-3">
              <div class="relative flex w-56 items-center justify-start">
                <p class="absolute ms-2 w-10 text-slate-400">
                  <FiSearch />
                </p>
                <input class="w-full rounded border border-slate-200 bg-slate-50 px-4 py-1 ps-7 duration-300 ease-in placeholder:text-quote-20 placeholder:italic placeholder:text-slate-400 focus-within:outline-none hover:cursor-pointer focus:bg-white focus:outline-none" type="search" placeholder="search location..." name="Location" />
              </div>
              <button class="flex w-min items-center gap-2 rounded border border-slate-300 bg-slate-100 px-3 py-1 text-body-20 font-medium text-slate-600"><MdSettings /> Download</button>
            </div>
          </div>
          <hr />
          <div class="flex items-center justify-between px-4 py-1">
            <p class="text-body-30 font-medium">670 Alerts</p>
            <div class="flex gap-3">
              <button class="flex items-center gap-2 rounded bg-brand-500 px-3 py-1 text-body-20 text-white"><MdSettings />Resolve Alerts Individually</button>
              <button class="flex items-center gap-2 rounded bg-brand-500 px-3 py-1 text-body-20 text-white"><MdSettings />Resolve All Alerts</button>
            </div>
          </div>
          <hr />
          <AlertCard />
          <AlertCard />
          <AlertCard />
          <AlertCard />
          <AlertCard />
          <AlertCard />
          <AlertCard />
          <AlertCard />
        </div>

        {/* <!-- Second child div (Sticky) --> */}
        <div class="sticky top-20 w-full rounded border bg-white py-4 dark:bg-gray-700 md:w-1/4">
          <div class="mb-2 flex items-center justify-between px-4">
            <p class="font-medium text-slate-700">User Activity</p>
            <span>
              <button class="rounded p-1 hover:cursor-pointer hover:bg-slate-100">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button class="rounded p-1 hover:cursor-pointer hover:bg-slate-100">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </span>
          </div>
          <ul class="flex w-full flex-col gap-2 px-1">
            <li class="flex w-full gap-4 rounded px-3 py-2 hover:cursor-pointer hover:bg-slate-100">
              <img class="h-10 w-10 rounded bg-slate-400 object-cover object-center" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="" />
              <div class="flex flex-col">
                <p class="line-clamp-2 text-body-20"><span class="font-medium">liz</span> deleted the <span class="font-medium">new monitor Schedule</span> that pauses for 1 hour, starting on Jun 7 2019 at 2:35 AM until 3:35 AM because it will never pause again</p>
                <p class="text-body-20 text-slate-400">yesterday</p>
              </div>
            </li>
            <li class="flex w-full gap-4 rounded px-3 py-2 hover:cursor-pointer hover:bg-slate-100">
              <img class="h-10 w-10 rounded bg-slate-400 object-cover object-center" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="" />
              <div class="flex flex-col">
                <p class="line-clamp-2 text-body-20"><span class="font-medium">liz</span> deleted the <span class="font-medium">new monitor Schedule</span> that pauses for 1 hour, starting on Jun 7 2019 at 2:35 AM until 3:35 AM because it will never pause again</p>
                <p class="text-body-20 text-slate-400">yesterday</p>
              </div>
            </li>
            <li class="flex w-full gap-4 rounded px-3 py-2 hover:cursor-pointer hover:bg-slate-100">
              <img class="h-10 w-10 rounded bg-slate-400 object-cover object-center" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="" />
              <div class="flex flex-col">
                <p class="line-clamp-2 text-body-20"><span class="font-medium">liz</span> deleted the <span class="font-medium">new monitor Schedule</span> that pauses for 1 hour, starting on Jun 7 2019 at 2:35 AM until 3:35 AM because it will never pause again</p>
                <p class="text-body-20 text-slate-400">yesterday</p>
              </div>
            </li>
            <li class="flex w-full gap-4 rounded px-3 py-2 hover:cursor-pointer hover:bg-slate-100">
              <img class="h-10 w-10 rounded bg-slate-400 object-cover object-center" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="" />
              <div class="flex flex-col">
                <p class="line-clamp-2 text-body-20"><span class="font-medium">liz</span> deleted the <span class="font-medium">new monitor Schedule</span> that pauses for 1 hour, starting on Jun 7 2019 at 2:35 AM until 3:35 AM because it will never pause again</p>
                <p class="text-body-20 text-slate-400">yesterday</p>
              </div>
            </li>
            <li class="flex w-full gap-4 rounded px-3 py-2 hover:cursor-pointer hover:bg-slate-100">
              <img class="h-10 w-10 rounded bg-slate-400 object-cover object-center" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="" />
              <div class="flex flex-col">
                <p class="line-clamp-2 text-body-20"><span class="font-medium">liz</span> deleted the <span class="font-medium">new monitor Schedule</span> that pauses for 1 hour, starting on Jun 7 2019 at 2:35 AM until 3:35 AM because it will never pause again</p>
                <p class="text-body-20 text-slate-400">yesterday</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
</div>

    </div>
  )
}