import React from 'react';

import { Progress } from '@nextui-org/react';

import '@fontsource/karla'

interface Poll {
  name: string;
  date: string;
  percentValue: number;
  votes: number;
  remain: string;
  type: string;
  startTime: string;
  value1: string;
}

type PollCardProps = {
  poll: Poll;
  onPollClick: (pollName: string) => void;
  selectedPoll: string;
};

const PollCard: React.FC<PollCardProps> = ({ poll, onPollClick, selectedPoll }) => {
  return (
    <div className='flex flex-col justify-center items-center text-gray-600 w-full cursor-pointer' key={poll.name} onClick={() => onPollClick(poll.name)}>
      <div className={`flex flex-col p-2 gap-2 hover:opacity-80 rounded-md w-full ${poll.name == selectedPoll ? 'bg-transparent border border-blue-400' : 'bg-bgColor'}`}>
        <div className='flex justify-between items-center w-full'>
          <div className='text-white text-md'>
            {poll.name}
          </div>
          <div className='text-xs'>
            {poll.date}
          </div>
        </div>
        <Progress className='color-borderColor' size='sm' aria-label='Progress...' value={poll.percentValue} />
        <div className='flex justify-between items-center w-full'>
          <div className='text-xs'>
            <span className='text-white'>{poll.votes == 0 ? '-' : poll.votes} </span>Votes
          </div>
          <div className='text-xs'>
          {poll.type != 'ended' && <>
            <span className='text-white'>{poll.remain} </span> remaining
          </>}
          </div>
        </div>
        <div className='flex justify-between items-center w-full'>
          <div className='flex'>
            <div className='w-6 h-6 rounded-full bg-bgColor border border-borderColor'></div>
            <div className='w-6 h-6 -ml-2 rounded-full bg-bgColor border border-borderColor'></div>
            <div className='w-6 h-6 -ml-2 rounded-full bg-bgColor border border-borderColor'></div>
            <div className='w-6 h-6 -ml-2 rounded-full bg-bgColor border border-borderColor'></div>
            <div className='w-6 h-6 -ml-2 rounded-full bg-bgColor border border-borderColor'></div>
            <div className='w-6 h-6 -ml-2 rounded-full bg-bgColor border border-borderColor flex justify-center items-center'>
              <div className='text-xs text-white'>{poll.value1}</div>
            </div>
          </div>
          {poll.type == 'future' ? <button className='h-7 px-4 bg-trasparent hover:bg-yellow-700 border border-yellow-700 rounded-lg text-sm text-yellow-700 hover:text-white'>
            Starts in {poll.startTime}
          </button> : poll.type == 'ongoing' ? <button className='h-7 px-4 bg-transparent hover:bg-blue-400 border border-blue-400 rounded-lg text-sm text-blue-400 hover:text-white'>
            Ongoing Poll
          </button> : <button className='h-7 px-4 bg-transparent hover:bg-red-700 border border-red-700 rounded-lg text-sm text-red-700 hover:text-white'>
            Poll Ended
          </button>}
        </div>
      </div>
    </div>
  );
};

export default PollCard;