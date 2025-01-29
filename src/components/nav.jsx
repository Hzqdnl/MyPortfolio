import logo from '../assets/hzqDnl.svg'

const nav = () => {
  return (
    <>
    <nav className="flex justify-between font-mono rounded-bl-2xl rounded-br-2xl mx-40 px-16 items-center h-16 bg-emerald-200 shadow-2xl relative" role="navigation">
      <div className="w-3/6">
      <img src={logo} alt="logo" className='w-20'/>
      </div>
      <ul className="flex w-3/6 space-x-6 items-center justify-end">
        <li className="hover:bg-emerald-400 hover:text-white rounded-2xl p-2"><a href="#">About Me</a></li>
        <li className="hover:bg-emerald-400 hover:text-white rounded-2xl p-2"><a href="#">Projects Involved</a></li>
        <li className="hover:bg-emerald-400 hover:text-white rounded-2xl p-2"><a href="#">Languages</a></li>
        <li className="hover:bg-emerald-400 hover:text-white rounded-2xl p-2"><a href="#">Send Details</a></li>
      </ul>
    </nav>
    </>
  )
}

export default nav
