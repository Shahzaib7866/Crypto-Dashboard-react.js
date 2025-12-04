import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import GridViewIcon from '@mui/icons-material/GridView';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ReceiptSharpIcon from '@mui/icons-material/ReceiptSharp';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import crypto from '../../assets/images/crypto.jpg';

const Sidebar = () => {
  return (
    <>
      {/* Sidebar Container: Use flex-col to stack children vertically */}
      <aside className="sticky top-[130px] z-40 flex w-64 h-screen bg-gray-800 text-white mb-1">

        {/* Top Section: Logo and title. Use flex with items-center to align vertically. */}
        <div className='flex items-center justify-between pt-4 pb-8 px-4'>
          <div className='flex items-center'>
            <img
              src={crypto}
              alt="crypto image"
              className="w-10 h-10 rounded-full mr-2"
            />
            <h5 className="text-xl font-bold">Crypto</h5>
          </div>
          <button className='bg-white text-black rounded p-1'>
            <KeyboardArrowLeftIcon />
          </button>
        </div>

        {/* Navigation Section: Use a div with vertical padding and center the list. */}
        <div className='flex-1 overflow-y-auto px-4'>
          <ul className='flex flex-col gap-6 font-bold'>
            {/* Dashboard */}
            <li>
              <a href="/" className="flex items-center text-white p-2 hover:bg-gray-700 rounded-md transition-colors">
                <GridViewIcon className='mr-2' />
                <span>Dashboard</span>
                <KeyboardArrowRightOutlinedIcon className='ml-auto' />
              </a>
            </li>

            {/* My Wallet */}
            <li>
              <a href="/mywallet" className="flex items-center text-white p-2 hover:bg-gray-700 rounded-md transition-colors">
                <AccountBalanceWalletIcon className='mr-2' />
                <span>My Wallet</span>
              </a>
            </li>

            {/* Transaction */}
            <li>
              <a href="/transaction" className="flex items-center text-white p-2 hover:bg-gray-700 rounded-md transition-colors">
                <ReceiptSharpIcon className='mr-2' />
                <span>Transaction</span>
              </a>
            </li>

            {/* Crypto */}
            <li>
              <a href="/crypto" className="flex items-center text-white p-2 hover:bg-gray-700 rounded-md transition-colors">
                <CurrencyBitcoinIcon className='mr-2' />
                <span>Crypto</span>
              </a>
            </li>

            {/* Exchange */}
            <li>
              <a href="/exchange" className="flex items-center text-white p-2 hover:bg-gray-700 rounded-md transition-colors">
                <CurrencyExchangeIcon className='mr-2' />
                <span>Exchange</span>
              </a>
            </li>

            {/* Settings */}
            <li>
              <a href="/settings" className="flex items-center text-white p-2 hover:bg-gray-700 rounded-md transition-colors">
                <SettingsOutlinedIcon className='mr-2' />
                <span>Settings</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Bottom Section: Upgrade to Pro. Use padding and a fixed bottom position. */}
        <div className='mt-38 mb-8 text-center'>
          <p className="text-sm text-gray-5500">For more features</p>
          <h6 className='font-bold text-lg'>Upgrade to Pro</h6>
        </div>

      </aside>
    </>
  );
};

export default Sidebar;



