
import { Link } from "react-router-dom";
import { MdOutlineAccountCircle } from "react-icons/md";
import { GoHistory } from "react-icons/go";

const Sidebar = () => {
  return (
    <aside className="tw-fixed tw-top-[73px] tw-left-0 tw-z-40 tw-h-screen tw-w-60 tw-transition-transform sm:tw-translate-x-0  tw-bg-white tw-border-r tw-border-gray-200">
      <div className="tw-h-full">
        <ul className="tw-space-y-2 tw-font-medium">
          <li >
            <Link to='' className="tw-flex tw-items-center tw-p-2 tw-text-gray-900 hover:tw-text-customBlue hover:tw-bg-gray-100">
              <MdOutlineAccountCircle className="tw-w-5 tw-h-5" />
              <span className="tw-ms-3">Account</span>
            </Link>
          </li>
          <li >
            <Link to='' className="tw-flex tw-items-center tw-p-2 tw-text-gray-900 tw-rounded-lg hover:tw-text-customBlue hover:tw-bg-gray-100">
              <GoHistory className="tw-w-5 tw-h-5" />
              <span className="tw-ms-3">History</span>
            </Link>
          </li>

        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;