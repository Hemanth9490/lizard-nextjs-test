import Breadcrumbs from '@/components/Breadcrumbs';
import LocationHeader from '@/components/LocationHeader';
import SensorList from '@/components/sensorList';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const netnum = params.netnum;

  return {
    title: `Location listing for ${netnum}`,
  };
}

async function getData(netnum) {
  let res = await fetch(`http://localhost:8080/app/location/showSensors?netnum=${netnum}`)
  if (!res.ok) {
    notFound();
  }
  return res.json()
}
async function getLocationDetails(netnum) {
  const res = await fetch(`http://localhost:3000/api/locations?netnum=${netnum}`);
  if (!res.ok) {
    notFound();
  }
  return res.json();
}
export default async function LocationPage({ params }) {
  const links = [
    { href: '/', text: 'Amazon' },
    { href: '/', text: 'Fresh' },
    { href: '/', text: 'Amoc' },
  ];
  const data = await getData(params.netnum);
  const locationDetails = await getLocationDetails(params.netnum);
  return (
    <div className="flex flex-col gap-2">
      <Breadcrumbs links={links} />
      <div className="flex flex-col gap-4">
        <LocationHeader locationDetails={locationDetails.locationDetails} contentOnly={true} />
        <SensorList data={data} sensorsList={data.sensorList} />
      </div>
    </div>
  );
}
