import { MdSensors } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';

import { selectedLocatoin as currentLocation } from '@/data/location';
import { Fragment } from 'react';
import ChartComponent from './graph';
import { timeAgo } from '@/helpers/dataFormate';

// this is to determine the color for the icons inside the detail cards.
const determineColor = (name) => {
  switch (name) {
    case 'Active Alerts':
      return {
        textColor: 'text-red-500',
        bgColor: 'bg-red-100',
      };
    case 'Open Alerts':
      return {
        textColor: 'text-amber-500',
        bgColor: 'bg-amber-100',
      };
    case 'Effectiveness':
      return {
        textColor: 'text-cyan-500',
        bgColor: 'bg-cyan-100',
      };
    case 'Uptime':
      return {
        textColor: 'text-violet-500',
        bgColor: 'bg-violet-100',
      };
    case 'Dew Point':
      return {
        textColor: 'text-green-500',
        bgColor: 'bg-green-100',
      };
    case 'Humidity':
      return {
        textColor: 'text-amber-500',
        bgColor: 'bg-amber-100',
      };
    case 'Ambient':
      return {
        textColor: 'text-cyan-500',
        bgColor: 'bg-cyan-100',
      };
    default:
      return {
        textColor: 'text-gray-500',
        bgColor: 'bg-gray-100',
      };
  }
};

const nameMapping = {
  dewpoint: 'Dew Point',
  ambient: 'Ambient',
  humidity: 'Humidity',
};

const Details = (props) => {
  // Get the appropriate color for the icon based on the item's name (e.g., "effectiveness" or "uptime").
  const iconColor = determineColor(props.name);

  // Determine if the current item should be displayed as an alert.
  const isAlert = props.alert;

  // Check if the item's name is either "effectiveness" or "uptime".
  // These specific names might need different styles or layout.
  const isSpecialName =
    props.name === 'effectiveness' || props.name === 'uptime';

  // Set the width of the container. If the name is "effectiveness" or "uptime", make it wider.
  const widthStyle = isSpecialName ? 'w-[406px]' : 'w-[195px]';

  return (
    <div
      className={`flex flex-col ${
        isAlert
          ? `${widthStyle} px-6 py-4 bg-white rounded border border-slate-200`
          : ''
      }`}
    >
      {/* If it's an alert, space out the items a bit more for better visibility. */}
      <div
        className={`flex flex-col ${
          isAlert ? 'h-full justify-between gap-2' : ''
        }`}
      >
        {/* Display the name of the item with a special icon. */}
        <p className="flex gap-2 items-center text-subtitle-20 text-slate-500 font-medium">
          <span
            className={`${iconColor.textColor} ${iconColor.bgColor} p-1 rounded-full text-title-40`}
          >
            <MdSensors />
          </span>
          {props.name}
        </p>
        {/* Display the value of the item, using different text sizes based on whether it's an alert. */}
        <p
          className={`font-semibold ${
            isAlert ? 'text-display-70' : 'text-title-50'
          }`}
        >
          {props.value}
        </p>
      </div>
    </div>
  );
};

export default function LocationHeader({contentOnly = true, locationDetails}) {
  const isAdditionalDetails =
  locationDetails.ambient ||
  locationDetails.dewpoint ||
  locationDetails.humidity;
  // Checking for effectiveness and uptime data from response and based on that updating the width dynamically on UI.
  const isEffectivenessOrUptimePresent =
  locationDetails.effectiveness || locationDetails.uptime;
  const widthValue = !isEffectivenessOrUptimePresent ? 'w-[195px]' : 'w-[406px]';
  console.log(locationDetails)
  return (
    <div className="w-full flex flex-col gap-4 px-7 py-5 bg-white rounded border border-slate-200 shadow-sm">
      {/* This section is for displaying the title of the location. */}
      <div className="flex">
        {/* This is the left part showing the location name and address. */}
        <div className="flex flex-col flex-1">
          <p className="text-display-60 font-medium">{locationDetails.name}</p>
          {/* Display the address only if it exists. */}
          {locationDetails.address && (
            <p className="flex items-center gap-1 text-body-30 text-slate-500">
              <span className="bg-slate-200 p-1 rounded">
                {' '}
                <FaLocationDot />
              </span>
              {locationDetails.address}
            </p>
          )}
        </div>

        {/* This is the right part showing when the data was last updated. */}
        {locationDetails.last_communication && (
          <div className="flex flex-1 justify-end">
            <p className="text-body-10 text-slate-500">
              {timeAgo(locationDetails.last_communication)}
            </p>
          </div>
        )}
      </div>

      {/* This section is for displaying content related to the location. */}
      {contentOnly && <div className='flex gap-4'>
        {/* This section is for meta data related to the location. */}
        <div className={`${widthValue} flex flex-wrap justify-between gap-4`}>
          {/* Display alerts and other critical data. */}
          <Details
            alert={true}
            name="Active Alerts"
            value={locationDetails.active_alert_count}
          />
          <Details
            alert={true}
            name="Open Alerts"
            value={locationDetails.unacknowledged_alert_count}
          />
          {locationDetails.effectiveness && (
            <Details
              alert={true}
              name="Effectiveness"
              value={locationDetails.effectiveness}
            />
          )}
          {locationDetails.uptime && (
            <Details
              alert={true}
              name="Uptime"
              value={locationDetails.uptime}
            />
          )}
        </div>

        {/* Placeholder for graphical data, might contain charts or graphs in the future. */}
        <div className='flex flex-col justify-between grow bg-white border border-slate-200 rounded  py-4 px-4'>
          {/* Heading */}
          <div className='flex justify-between'>
            <p className='text-subtitle-20 text-slate-900 font-medium'>Top Alerting Locations for 30 Days</p>
            <button className='text-sky-500 font-medium text-body-20 '>view all</button>
          </div>
          {/* Chart Component */}
          <div className=''>
            <ChartComponent data={''} />
          </div>
        </div>

        {/* Display additional details if they exist. */}
        {isAdditionalDetails && <div className='w-[200px] flex flex-col justify-between px-5 py-4 bg-white rounded border border-slate-200'>
          {
            Object.entries(currentLocation.additionalDetails).map(([key, value], index, array) => (
              <Fragment key={key}>
                <Details name={nameMapping[key]} value={value + " °F"} />
                {/* Add a horizontal line separator between items, but not after the last one. */}
                {index !== array.length - 1 && <hr className='border-t-slate-300' />}
              </Fragment>
            ))
          }
        </div>}
      </div>}
    </div>
  );
}
