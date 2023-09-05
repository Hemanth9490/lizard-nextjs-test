import Link from 'next/link';
import {
  FaGlobeAmericas,
  FaBell,
  FaTruck,
  FaUser,
  FaChartBar,
  FaChartLine,
  FaHeartbeat,
  FaMoneyBill,
  FaFacebookMessenger,
} from 'react-icons/fa';
import { MdSettings, MdHelp } from 'react-icons/md';

const menuItems = [
  {
    icon: <FaGlobeAmericas />,
    name: 'Navigate Facilities',
    href: '/app/locations/netnum/-500',
  },
  { icon: <FaBell />, name: 'Alert Dashboard', href: '/' },
  { icon: <FaTruck />, name: 'Vehicles', href: '/' },
  { icon: <FaUser />, name: 'User Details', href: '/' },
  { icon: <FaChartBar />, name: 'Reports', href: '/' },
  { icon: <FaChartLine />, name: 'Research Tools', href: '/' },
  { icon: <FaHeartbeat />, name: 'Network Health', href: '/' },
  { icon: <FaMoneyBill />, name: 'Billing', href: '/' },
  { icon: <FaFacebookMessenger />, name: 'Messages', href: '/' },
];

const bottomMenuItems = [
  { icon: <MdHelp />, name: 'Help', href: '/' },
  { icon: <MdSettings />, name: 'Settings', href: '/' },
];

export default function Sidebar({ isExpanded }) {
  return (
    <div className="flex flex-col bg-white border-r-2 border-slate-200 p-2 h-[calc(100vh-66px)] sticky top-[66px]">
      <nav className="flex-grow">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className="mb-1">
              <Link
                href={item.href}
                className="flex gap-4 p-3 rounded text-body-20 items-center text-slate-500 hover:text-brand-800 hover:bg-brand-50 transition-colors"
              >
                <span className="text-body-40">{item.icon}</span>
                {isExpanded && item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav>
        <ul>
          {bottomMenuItems.map((item, index) => (
            <li key={index} className="mb-1">
              <Link
                href={item.href}
                className="flex gap-4 p-3 rounded text-body-20 items-center text-slate-500 hover:text-brand-800 hover:bg-brand-50 transition-colors"
              >
                <span className="text-body-50">{item.icon}</span>
                {isExpanded && item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
