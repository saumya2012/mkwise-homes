import { Link } from "react-router-dom";

function Breadcrumbs({pageTitle}) {
  return (
    <section className="page-title bg-gray-100 py-6 w-full"> 
      <nav className="breadcrumbs">
        <div className="container mx-auto px-4 flex justify-start">
          <ol className="list-none p-0 text-sm font-bold flex items-center">
            <li>
              <Link to="/" className="text-primary-600 hover:text-secondary-600">
                Home
              </Link>
            </li>
            <li className="mx-2 text-gray-500">/</li>
            <li className="text-secondary-600">{pageTitle}</li>
          </ol>
        </div>
      </nav>
    </section>
  );
}

export default Breadcrumbs;