import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 px-4">
            <h5 className="text-xl font-semibold mb-4">Subscribe to our newsletter</h5>
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email address</label>
                <input
                  type="email"
                  className="form-input mt-1 block w-full p-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:ring-blue-500 focus:border-blue-500"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <button type="submit" className="btn btn-primary bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md">
                SUBMIT
              </button>
            </form>
          </div>
          <div className="w-full md:w-1/2 px-4 mt-8 md:mt-0">
            <h5 className="text-xl font-semibold mb-4">Menu</h5>
            <ul className="list-none space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/administration" className="text-gray-400 hover:text-white">Administration</Link>
              </li>
              <li>
                <Link to="/member" className="text-gray-400 hover:text-white">Members</Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-400 hover:text-white">News</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 text-center py-4">
        <p className="mb-0 text-gray-400">&copy; {new Date().getFullYear()} Apna College. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
