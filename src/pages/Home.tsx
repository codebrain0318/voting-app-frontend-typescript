import { useState } from 'react'

import { Switch, Progress } from '@nextui-org/react'

import SearchBox from '../components/SearchBox'
import SettingButton from '../components/SettingButton'
import PollOption from '../components/PollOption'

import '@fontsource/karla'

const Home = () => {
  const [isSwitchSelected, setIsSwitchSelected] = useState(false)
  const [selectedPoll, setSelectedPoll] = useState('')
  const toggleSwitch = () => {
    if(!isSwitchSelected) setSelectedPoll('Poll 4');
    setIsSwitchSelected(!isSwitchSelected);
  }
  const onPollClick = (pollName: string) => {
    setIsSwitchSelected(false);
    setSelectedPoll(pollName);
  }
  const polls = [
    {
      type: 'future',
      name: 'Poll 5',
      date: '09/09/2023',
      percentValue: 0,
      votes: 0,
      remain: '4 days',
      value1: '99+',
      startTime: '35 minutes'
    },
    {
      type: 'ongoing',
      name: 'Poll 4',
      date: '09/09/2023',
      percentValue: 40,
      votes: 100,
      remain: '36 seconds',
      value1: '95+',
      startTime: ''
    },
    {
      type: 'ended',
      name: 'Poll 3',
      date: '09/09/2023',
      percentValue: 0,
      votes: 11140,
      remain: '',
      value1: '99+',
      startTime: ''
    },
    {
      type: 'ended',
      name: 'Poll 2',
      date: '09/09/2023',
      percentValue: 0,
      votes: 12655,
      remain: '',
      value1: '99+',
      startTime: ''
    },
    {
      type: 'ended',
      name: 'Poll 1',
      date: '09/09/2023',
      percentValue: 0,
      votes: 10083,
      remain: '',
      value1: '99+',
      startTime: ''
    },
  ]
  return (
    <div className='flex flex-col-reverse items-center justify-center flex-1 gap-6 p-6 lg:flex-row font-karla h-full'>
      <div className='flex flex-col gap-2 items-start justify-start flex-1 w-full h-full max-h-[calc(100vh-112px)] p-4 rounded-lg lg:w-1/3 bg-panelBgColor overflow-y-auto'>
        <div className='flex justify-between items-center w-full'>
          <div className='text-white text-lg font-extrabold'>
            Polls
          </div>
          <div className='flex items-center gap-2'>
            <div className='text-gray-500 text-sm'>
              Auto select newest poll
            </div>
            <Switch
              isSelected={isSwitchSelected}
              onChange={() => toggleSwitch()}
            />
          </div>
        </div>
        {polls.map(poll => (
          <div className='flex flex-col justify-center items-center text-gray-600 w-full cursor-pointer' onClick={() => onPollClick(poll.name)}>
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
        ))}
      </div>
      <div className='relative flex flex-col gap-2 items-start flex-1 justify-start w-full h-full max-h-[calc(100vh-112px)] p-4 rounded-lg lg:w-2/3 bg-panelBgColor text-gray-600 text-xs overflow-y-auto'>
        <div className='flex flex-col gap-2'>
          <div className='text-white text-lg font-extrabold'>
            {selectedPoll}
          </div>
          {selectedPoll != '' && <div>
            {selectedPoll} description goes here.
          </div>}
        </div>
        {selectedPoll != '' && <>
          <PollOption option={1} color="rgb(255,187,51)" percentage={44} />
          <PollOption option={2} color="rgb(255,136,0)" percentage={29} />
          <PollOption option={3} color="rgb(51,177,223)" percentage={12} />
          <PollOption option={4} color="rgb(170,102,204)" percentage={8} />
          <PollOption option={5} color="rgb(255,177,99)" percentage={4} />
          <PollOption option={6} color="rgb(62,182,143)" percentage={4} />
        </>}
        <SettingButton />
      </div>
      <div className="w-full md:hidden">
        <SearchBox />
      </div>
    </div>
  );
};
  
export default Home;