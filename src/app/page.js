import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Lizard Monitoring',
  description: 'www.lizardmonitoring.com',
};

export default function Home() {
  redirect('/locations/netnum/-500');
}
