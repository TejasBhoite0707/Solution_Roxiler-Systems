/* eslint-disable react/prop-types */

const Navbar = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className='bg-amber-100 shadow-lg fixed w-full top-0 z-10'>
      <div className='container mx-auto px-4 h-16 flex justify-between items-center'>
        <span className='text-2xl font-bold text-green-700'>
          Roxiller Transactions
        </span>   
        <div className='flex space-x-4'>
          <NavLink onClick={() => scrollTo('transactions')}>Transactions</NavLink>
          <NavLink onClick={() => scrollTo('statistics')}>Statistics</NavLink>
          <NavLink onClick={() => scrollTo('barchart')}>Bar Chart</NavLink>
          <NavLink onClick={() => scrollTo('piechart')}>Pie Chart</NavLink>
        </div>
      </div>
    </nav> 
  );
};

const NavLink = ({ onClick, children }) => (
  <button 
    onClick={onClick}
    className='bg-green-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition duration-300'
  >
    {children}
  </button>
);

export default Navbar;
