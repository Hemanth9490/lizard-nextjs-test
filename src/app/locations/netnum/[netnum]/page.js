import Breadcrumbs from '@/components/Breadcrumbs';
import LocationHeader from '@/components/LocationHeader';
import LocationList from '@/components/LocationList';

export async function generateMetadata({ params }) {
  const netnum = params.netnum;

  return {
    title: `Location listing for ${netnum}`,
  };
}

async function getData(netnum) {
  const res = await fetch(
    `http://localhost:3000/api/locations?netnum=${netnum}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function LocationPage({ params }) {

  const data = await getData(params.netnum);

  const links = [
    { href: '/', text: 'Amazon' },
    { href: '/', text: 'Fresh' },
    { href: '/', text: 'Amoc' },
  ];
  return (
    <div className="flex flex-col gap-2">
      {/* netnum = {params.netnum} */}
      <Breadcrumbs links={links} />
      <div className="flex flex-col gap-4">
      <LocationHeader
        locationDetails={data.locationDetails}
        netnum={params.netnum}
      />
      <LocationList subLocationsList={data.subLocationsList} />
      </div>
    </div>
  //   <div className="flex flex-col gap-2">
  //   <Breadcrumbs links={links} />
  //   <div className="flex flex-col gap-4">
  //     <LocationHeader />
  //     <LocationList />
  //   </div>
  // </div>
  );
}
