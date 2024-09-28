
const Footer = () => {
  return (
    <footer className="bg-amber-100 shadow-inner mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-center items-center">
          <div className="text-green-600 text-sm">
            <p>© {new Date().getFullYear()} Roxillar Transactions. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

