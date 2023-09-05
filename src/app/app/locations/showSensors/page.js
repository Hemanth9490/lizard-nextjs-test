
import Breadcrumbs from '@/components/Breadcrumbs';
import LocationHeader from '@/components/LocationHeader';
import LocationList from '@/components/LocationList';
import { notFound } from 'next/navigation';
import { cookies } from 'next/headers'

export async function generateMetadata({ searchParams }) {
  const netnum = searchParams.netnum;
  return {
    title: `Location listing for ${netnum}`,
  };
}

async function getData(netnum, cookieStore) {
  console.log(cookieStore, "cookieStore////////////////////////////////////")

  const res = await fetch(
    `http://localhost:8080/app/location/showSensors?netnum=${netnum}`, { headers: { 'Cookie': cookieStore, 'Accept': 'application/json', } });
  if (!res.ok) {
    notFound();
  }
  return res.json();
}

export default async function LocationPage({ searchParams }) {
  const cookieStore = cookies().toString()

  const data = await getData(searchParams.netnum, cookieStore);


  const links = [
    { href: '/', text: 'Amazon' },
    { href: '/', text: 'Fresh' },
    { href: '/', text: 'Amoc' },
  ];
  return (
    <div className="flex flex-col gap-2">
      <Breadcrumbs data={data} cookieStore={cookieStore} links={links} />
      <div className="flex flex-col gap-4">
        {/* <LocationHeader
          locationDetails={data.locationDetails}
          netnum={params.netnum}
        />
        <LocationList subLocationsList={data.subLocationsList} /> */}
      </div>
    </div>
  );
}
