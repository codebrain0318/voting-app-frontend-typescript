import React from 'react';

import 'react-circular-progressbar/dist/styles.css';

import '@fontsource/karla'

type PollOptionProps = {
  color: string;
  vote: number;
  option: number;
  votes: number;
};

const PollOption: React.FC<PollOptionProps> = ({ color, vote, option, votes }) => {
  const percentage = votes != 0 ? Math.floor(vote*100/votes) : 0;
  return (
    <div className='relative flex justify-between items-center p-4 gap-4 w-full max-w-[400px] bg-bgColor rounded-lg font-karla'>
      <div className='flex items-center gap-2'>
        <div className='w-6 h-6 rounded-full' style={{ background: `${color}` }}></div>
        <div className='text-white font-extrabold'>
          Option {option}
        </div>
      </div>
      <div className='text-xs text-gray-600'>
        {vote} Votes ({percentage}.00%)
      </div>
      
      <div className='flex absolute w-full h-full left-0 top-0 rounded-lg opacity-30'>
        <div className='rounded-l-lg' style={{ background: `${color}`, width: `${percentage}%` }}></div>
        <div className='flex-1 rounded-r-lg'></div>
      </div>
    </div>
  );
};

export default PollOption;