import Link from "next/link";
import { FiChevronRight } from "react-icons/fi"


export default function Breadcrumbs ({ links }) {
  return (
    <nav className="flex text-slate-700 text-body-30 font-medium">
      {
        links.map((link, index) => (
          <span key={index} className="flex items-center">
            {index !== links.length - 1 ? (
                <Link href={link.href} className="text-slate-600 hover:text-slate-950">
                  {link.text}
                </Link>
              ) : (
                <span className="text-slate-400"> {link.text} </span>
              )}
              {index !== links.length - 1 && (
                <span className="mx-2"><FiChevronRight /></span>
              )}
          </span>
        ))}
    </nav>
  )
}