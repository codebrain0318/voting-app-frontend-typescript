import SearchBox from '../components/SearchBox'
import SettingButton from '../components/SettingButton'

import '@fontsource/karla'

const Add = () => {
    return (
      <div className='flex flex-col-reverse items-center justify-center flex-1 gap-6 p-6 text-xl text-white lg:flex-row'>
      <div className='flex flex-col items-start justify-start w-full h-full px-6 py-5 rounded-lg lg:w-1/3 bg-panelBgColor'>
        <div className='font-extrabold font-karla'>
          Side Title
        </div>
      </div>
      <div className='relative flex flex-col items-start justify-start w-full h-full px-6 py-5 rounded-lg lg:w-2/3 bg-panelBgColor'>
      <div className='font-extrabold font-karla'>
        Add
      </div>
        <SettingButton />
      </div>
      <div className="w-full md:hidden">
        <SearchBox />
      </div>
    </div>
    );
  };
  
export default Add;