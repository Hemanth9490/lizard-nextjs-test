// import { locationDetails } from '@/data/location';
import Link from 'next/link';
import { FiSearch } from 'react-icons/fi';

const LocationListItem = ({ location }) => {
  return (
    <Link
      href={`/${location.netnum < 0 ? 'locations' : 'sensors'}/netnum/${
        location.netnum
      }`}
    >
      <div className="flex cursor-pointer rounded border border-slate-200 px-6 py-5 hover:bg-slate-50">
      <div class="flex flex-1 items-center gap-4">
        <div class="max-w-xs rounded-md bg-brand-50 p-4">
          <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="bg-brand-50 text-brand-500 h-12 w-12">
            <path d="M9.20993 19.3325H14.0344C14.0152 19.5542 14.0054 19.7767 14.0051 19.9992C14.0051 21.6007 14.6144 23.1475 15.7012 24.6503C14.9811 25.9291 14.1584 26.6652 13.3383 26.6652C11.7422 26.6652 10.138 23.8729 9.28727 19.7259L9.20993 19.3325ZM8.90324 17.3323H14.5038C15.1598 15.6583 16.4058 14.2823 18.0068 13.4639V13.3333C18.0068 12.4185 17.9721 11.5264 17.9054 10.6664H8.77122L8.72722 11.3171C8.61135 13.3235 8.67024 15.3361 8.90324 17.3323ZM21.3391 12.6652C22.3172 12.6638 23.2855 12.8588 24.1869 13.2385C25.0882 13.6183 25.9041 14.1752 26.5863 14.8761C26.7486 13.4718 26.6888 12.0507 26.4089 10.665H19.915L19.9656 11.5411C19.9856 11.9518 19.9976 12.3678 20.0043 12.7866C20.4363 12.7065 20.8844 12.6652 21.3391 12.6652ZM1.42519 19.3338H7.16707C7.65245 22.1101 8.47786 24.473 9.55663 26.1252C6.16635 25.119 3.31264 22.8109 1.61988 19.7059L1.42519 19.3338ZM0.269081 10.6664H6.76303C6.62353 12.6291 6.63824 14.5998 6.80704 16.5602L6.88304 17.3337H0.61178C-0.0636769 15.1759 -0.180696 12.8822 0.269081 10.6664ZM17.264 0.766739L17.12 0.540051C19.102 1.12831 20.9206 2.16817 22.4328 3.57793C23.9451 4.98768 25.1098 6.72893 25.8355 8.66483H19.7149C19.2936 5.44319 18.4388 2.67492 17.264 0.766739ZM9.39395 0.589389L9.55663 0.540051C8.38185 2.34022 7.50844 4.97914 7.04439 8.0781L6.96172 8.66483H0.843802C1.55918 6.75575 2.70162 5.03552 4.18376 3.63565C5.6659 2.23579 7.4485 1.19336 9.39528 0.588056L9.39395 0.589389ZM13.3383 0C15.0972 0 16.8667 3.38966 17.6241 8.24479L17.6867 8.66483H8.98991C9.71131 3.58568 11.5302 0 13.3383 0ZM27.3397 19.9992C27.3397 18.4078 26.7075 16.8815 25.5821 15.7562C24.4568 14.6309 22.9305 13.9987 21.3391 13.9987C19.7476 13.9987 18.2214 14.6309 17.096 15.7562C15.9707 16.8815 15.3385 18.4078 15.3385 19.9992C15.3385 22.4835 17.232 25.0864 20.9391 27.8667C21.0545 27.9532 21.1948 28 21.3391 28C21.4833 28 21.6237 27.9532 21.7391 27.8667C25.4461 25.0864 27.3397 22.4835 27.3397 19.9992ZM19.3389 19.9992C19.3389 19.4688 19.5496 18.96 19.9247 18.5849C20.2998 18.2098 20.8086 17.999 21.3391 17.999C21.8696 17.999 22.3783 18.2098 22.7534 18.5849C23.1285 18.96 23.3393 19.4688 23.3393 19.9992C23.3393 20.5297 23.1285 21.0385 22.7534 21.4136C22.3783 21.7887 21.8696 21.9994 21.3391 21.9994C20.8086 21.9994 20.2998 21.7887 19.9247 21.4136C19.5496 21.0385 19.3389 20.5297 19.3389 19.9992Z" fill="#44A06E"/>
          </svg>
        </div>
          <div className="flex w-full flex-col gap-2">
            <p className="text-body-50 flex items-baseline gap-2 font-medium">
              {location.name}
              {location.address && (
                <span className="text-body-30 flex items-center gap-2 font-normal text-slate-500">
                  <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                  {location.address}
                </span>
              )}
            </p>
            <div className="flex items-center gap-3">
              <p className="text-body-30 text-slate-500">
                <span className="text-subtitle-40 font-semibold text-slate-900">
                  {location.activeAlertCount}
                </span>{' '}
                Active Alerts
              </p>
              <span className="h-2 w-2 rounded-full bg-slate-400"></span>
              <p className="text-body-30 text-slate-500">
                <span className="text-subtitle-40 font-semibold text-slate-900">
                  {location.unacknowledgedAlertCount}
                </span>{' '}
                Open Alerts
              </p>
              <span className="h-2 w-2 rounded-full bg-slate-400"></span>
              {location.subLocationCount && (
                <p className="text-body-30 text-slate-500">
                  <span className="text-subtitle-40 font-semibold text-slate-900">
                    {location?.subLocationCount}
                  </span>{' '}
                  Sub Locations
                </p>
              )}
              {location.sensorsCount && (
                <p className="text-body-30 text-slate-500">
                  <span className="text-subtitle-40 font-semibold text-slate-900">
                    {location?.sensorsCount}
                  </span>{' '}
                  Sensors
                </p>
              )}
            </div>
          </div>
        </div>
        {location.lastCommunication && (
          <p className="text-body-10 text-slate-500">
            updated {location.lastCommunication} ago
          </p>
        )}
      </div>
    </Link>
  );
};

export default function LocationList({ subLocationsList }) {
  return (
    <div className="flex w-full flex-col gap-4 rounded border border-slate-200 bg-white px-7 py-5 shadow-md shadow-slate-100">
      <div className="flex justify-between">
        <p className="text-body-50 flex items-center justify-center gap-2 font-semibold">
          Locations{' '}
          <span className="text-body-30 bg-brand-600 rounded p-1 px-2 text-white">
            {subLocationsList.length}
          </span>
        </p>
        <div className="relative flex w-96 items-center justify-start">
          <p className="absolute ms-2 w-10 text-slate-400">
            <FiSearch />
          </p>
          <input
            className="placeholder:text-quote-20 w-full rounded border border-slate-200 bg-slate-50 px-4 py-1 ps-7 duration-300 ease-in placeholder:italic placeholder:text-slate-400 focus-within:outline-none hover:cursor-pointer focus:bg-white focus:outline-none"
            type="search"
            placeholder="search location..."
            name="Location"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {subLocationsList &&
          subLocationsList.map((location, index) => (
            <LocationListItem key={index} location={location} />
          ))}
      </div>
    </div>
  );
}
