function NavigationBar() {
  return (
    <>
      <nav className="w-full">
        <ul className="flex space-x-6 mx-auto px-4 max-w-2xl">
          <li>
            <a className="text-blue-500 hover:text-blue-800" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="text-blue-500 hover:text-blue-800" href="#">
              Projects
            </a>
          </li>
          <li>
            <a className="text-blue-500 hover:text-blue-800" href="#">
              Skills
            </a>
          </li>
          <li>
            <a className="text-gray-400 cursor-not-allowed" href="#">
              Disabled
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavigationBar;
