import { FiMenu, FiSearch, FiChevronDown } from 'react-icons/fi';

export default function TopNavigation({ toggleExpand }) {
  return (
    <div className="flex bg-white px-5 py-2 border-b-2 border-slate-200 sticky top-0 z-10">
      {/* left-content */}
      <div className="flex flex-1 gap-4 items-center">
        <button className="text-2xl" onClick={toggleExpand}>
          <FiMenu />
        </button>
        <p className="w-32 text-lg leading-5">
          Lizard{' '}
          <span className="text-brand-500 font-semibold">Monitoring</span>
        </p>
      </div>
      {/* right-content */}
      {/* TODO: Make common search component. */}
      <div className="flex-1 flex justify-end gap-2">
        {/* Search App */}
        <div className="relative flex w-60 items-center justify-start">
          <p className="absolute ms-2 w-10 text-slate-400">
            <FiSearch />
          </p>
          <input
            className="w-full rounded border border-slate-200 bg-slate-50 px-4 py-1 ps-7 duration-300 ease-in placeholder:text-quote-20 placeholder:italic placeholder:text-slate-400 focus-within:outline-none hover:cursor-pointer focus:bg-white focus:outline-none hover:border-slate-300"
            type="search"
            placeholder="Quick app search..."
            name="Location"
          />
        </div>
        {/* Profile User */}
        <div className="flex items-center px-4 py-1 gap-2 hover:bg-slate-50 hover:cursor-pointer rounded-full">
          {/* userinfo */}
          <p className="text-body-20 flex flex-col leading-5">
            <span className="font-semibold">Anand Sharma</span>{' '}
            <span>User</span>
          </p>
          {/* arrow */}
          <span className="text-xl">
            <FiChevronDown />
          </span>
        </div>
      </div>
    </div>
  );
}
