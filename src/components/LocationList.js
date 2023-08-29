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
        <div className="flex flex-1 gap-2">
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
