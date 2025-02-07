import search from '../assets/search.png';

const Header = ({ text, setText, clickHandler }) => {
  return (
    <div>
      <div>
        <div className='flex justify-between items-center pt-8 pb-4'>
          <h1 className=' text-white text-2xl font-bold'>devfinder</h1>
          <button className='flex gap-2 justify-center items-center'>
            <h3 className='text-white'>LIGHT</h3>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='#FFF'
            >
              <path d='M17 12c0 2.762-2.238 5-5 5s-5-2.238-5-5 2.238-5 5-5 5 2.238 5 5zm-5-7c.34 0 .672.033 1 .08v-2.08h-2v2.08c.328-.047.66-.08 1-.08zm-4.184 1.401l-1.472-1.473-1.415 1.415 1.473 1.473c.402-.537.878-1.013 1.414-1.415zm9.782 1.414l1.473-1.473-1.414-1.414-1.473 1.473c.537.402 1.012.878 1.414 1.414zm-5.598 11.185c-.34 0-.672-.033-1-.08v2.08h2v-2.08c-.328.047-.66.08-1 .08zm4.185-1.402l1.473 1.473 1.415-1.415-1.473-1.472c-.403.536-.879 1.012-1.415 1.414zm-11.185-5.598c0-.34.033-.672.08-1h-2.08v2h2.08c-.047-.328-.08-.66-.08-1zm13.92-1c.047.328.08.66.08 1s-.033.672-.08 1h2.08v-2h-2.08zm-12.519 5.184l-1.473 1.473 1.414 1.414 1.473-1.473c-.536-.402-1.012-.877-1.414-1.414z' />
            </svg>
          </button>
        </div>
        <div className='relative my-4'>
          <div className='absolute  top-3 left-4'>
            <img className='h-8' src={search} alt='' />
          </div>
          <input
            type='text'
            placeholder='Search Github username'
            value={text}
            onChange={(e) => setText(e.target.value)}
            className='bg-darkBlueBg  w-full outline-0 py-4 px-16 rounded-lg text-white'
          />
          <button
            onClick={clickHandler}
            className='bg-blue text-white py-3 px-4 absolute rounded-lg  top-1 right-1'
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
