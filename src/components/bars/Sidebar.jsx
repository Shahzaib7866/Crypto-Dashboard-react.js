import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import GridViewIcon from '@mui/icons-material/GridView';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ReceiptSharpIcon from '@mui/icons-material/ReceiptSharp';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import crypto from '../../assets/images/crypto.jpg'


const Sidebar = () => {
  return (
    <>

    <div className='bg-[#161326] h-[679px] w-[255px] text-white'>
      <div className='flex justify-center pt-4 pb-8'>


         <img
        src={crypto}
        alt="crypto image"
        className="w-full sm:w-1/6 md:w-1/6 rounded mr-2"
      />
        <h5>Crypto</h5>

        <button><KeyboardArrowLeftIcon className='ml-5 bg-white text-black rounded' /></button>
        </div>


      {/* pages name */}
      {/* <div className='flex items-center justify-center'>
        <ul className='flex items-center justify-center'>

<ul className='flex flex-col items-center justify-center font-bold'>
  <li>
    <a href="/dashboard" className="flex items-center text-white">
      <GridViewIcon className='mr-2' />
      <span>Dashboard</span>
    </a>
  </li>
</ul>


        <ul>
          <li>Default</li>
          <li>Boxed</li>
        </ul>

  <li>
    <a href="/dashboard" className="flex items-center text-white">
      <AccountBalanceWalletIcon className='mr-2' />
      <span>My Wallet</span>
    </a>
  </li>



        <li><ReceiptSharpIcon className='mr-2'/>Transaction</li>
        <li><CurrencyBitcoinIcon className='mr-2 mt-4'/>Crypto</li>
        <li><CurrencyExchangeIcon className='mr-2' />Exchange</li>
        <li><SettingsOutlinedIcon className='mr-2'/>Settings</li>
        </ul>
      </div> */}

<div className='flex justify-center mt-4'>
  <ul className='flex flex-col gap-7 font-bold'>

    {/* Dashboard */}
    <li>
      <a href="/dashboard" className="flex items-center text-white">
        <GridViewIcon className='mr-2' />
        <span>Dashboard</span>
        <KeyboardArrowRightOutlinedIcon className='ml-5' />
      </a>
    </li>

    {/* My Wallet */}
    <li>
      <a href="/dashboard" className="flex items-center text-white">
        <AccountBalanceWalletIcon className='mr-2' />
        <span>My Wallet</span>
      </a>
    </li>

    {/* Transaction */}
    <li>
      <a href="/transaction" className="flex items-center text-white">
        <ReceiptSharpIcon className='mr-2' />
        <span>Transaction</span>
      </a>
    </li>

    {/* Crypto */}
    <li>
      <a href="/crypto" className="flex items-center text-white">
        <CurrencyBitcoinIcon className='mr-2' />
        <span>Crypto</span>
      </a>
    </li>

    {/* Exchange */}
    <li>
      <a href="/exchange" className="flex items-center text-white">
        <CurrencyExchangeIcon className='mr-2' />
        <span>Exchange</span>
      </a>
    </li>

    {/* Settings */}
    <li>
      <a href="/settings" className="flex items-center text-white">
        <SettingsOutlinedIcon className='mr-2' />
        <span>Settings</span>
      </a>
    </li>
  </ul>
</div>




    </div>
      

    </>
  )
}

export default Sidebar