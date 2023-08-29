import LocationHeader from '@/components/LocationHeader';
import LocationList from '@/components/LocationList';
import ChartComponent from '@/components/graph';

export async function generateMetadata({ params }) {
  const netnum = params.netnum;

  return {
    title: `Location listing for ${netnum}`,
  };
}

async function getData(netnum) {
  const res = await fetch(`http://localhost:3000/api/sensors?netnum=${netnum}`);
  console.log(res, 'resresresresres');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
export default async function LocationPage({ params }) {
  const data = await getData(params.netnum);
  console.log(data, 'sensors data');
  return (
    <div className="flex flex-col gap-4">
      <ChartComponent data={data} />
    </div>
  );
}
