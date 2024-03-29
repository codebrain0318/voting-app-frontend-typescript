import '@fontsource/sen'

const SearchBox = () => {
  return (
    <div className='relative flex w-full'>
      <input
        type='text'
        placeholder='Search'
        className='flex-1 p-2 h-10 text-lg text-gray-500 bg-transparent border rounded-md outline-none font-sen border-borderColor focus:border-gray-500 indent-8'
      />
      <span className="absolute left-3 top-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <g clipPath="url(#clip0_0_24)">
            <path d="M19.6486 17.9768L15.8048 14.133C16.9697 12.608 17.6086 10.7583 17.6089 8.80639C17.6089 6.45418 16.6928 4.2426 15.0292 2.57936C13.366 0.916115 11.1547 0 8.80219 0C6.44998 0 4.2384 0.916115 2.57516 2.57936C-0.858387 6.0132 -0.858387 11.6002 2.57516 15.0334C4.2384 16.697 6.44998 17.6131 8.80219 17.6131C10.7541 17.6128 12.6038 16.9739 14.1288 15.809L17.9726 19.6528C18.2038 19.8843 18.5073 20 18.8106 20C19.1138 20 19.4174 19.8843 19.6486 19.6528C20.1115 19.1901 20.1115 18.4395 19.6486 17.9768ZM4.25114 13.3574C1.7418 10.8481 1.74209 6.76495 4.25114 4.25533C5.46674 3.04002 7.0831 2.37044 8.80219 2.37044C10.5216 2.37044 12.1376 3.04002 13.3533 4.25533C14.5689 5.47093 15.2384 7.0873 15.2384 8.80639C15.2384 10.5258 14.5689 12.1418 13.3533 13.3574C12.1376 14.573 10.5216 15.2426 8.80219 15.2426C7.0831 15.2426 5.46674 14.573 4.25114 13.3574Z" fill="#70747B"/>
          </g>
          <defs>
            <clipPath id="clip0_0_24">
              <rect width="20" height="20" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </span>
    </div>
  );
};

export default SearchBox;