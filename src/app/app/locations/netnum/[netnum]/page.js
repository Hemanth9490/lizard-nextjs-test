
import Breadcrumbs from '@/components/Breadcrumbs';
import LocationHeader from '@/components/LocationHeader';
import LocationList from '@/components/LocationList';
import { notFound } from 'next/navigation';
import { cookies } from 'next/headers'

// export async function generateMetadata({ params }) {
//   const netnum = params.netnum;

//   return {
//     title: `Location listing for ${netnum}`,
//   };
// }

// async function getData(netnum) {


//   const res = await fetch(
//     `http://localhost:8080/app/location/showSensors?netnum=${netnum}`
//   );
//   console.log("res+++++++++++++++++++++++++++++++++++++++++++++++++", res)
//   if (!res.ok) {
//     notFound();
//   }
//   return res.json();
// }

export default async function LocationPage({ params }) {
  const cookieStore = cookies().toString()

  // const data = await getData(params.netnum);
  // console.log(data, "data+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++", data)

  const links = [
    { href: '/', text: 'Amazon' },
    { href: '/', text: 'Fresh' },
    { href: '/', text: 'Amoc' },
  ];
  return (
    <div className="flex flex-col gap-2">
      <Breadcrumbs cookieStore={cookieStore} links={links} />
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
