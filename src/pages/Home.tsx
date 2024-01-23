import { useState } from 'react'

import { Switch } from '@nextui-org/react'

import SearchBox from '../components/SearchBox'
import SettingButton from '../components/SettingButton'
import PollOption from '../components/PollOption'
import PollCard from '../components/PollCard'

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
      startTime: '35 minutes',
      decription: 'Poll 5 description goes here.',
      options: [
        0, 0, 0, 0, 0, 0
      ]
    },
    {
      type: 'ongoing',
      name: 'Poll 4',
      date: '09/09/2023',
      percentValue: 40,
      votes: 100,
      remain: '36 seconds',
      value1: '95+',
      startTime: '',
      decription: 'Poll 4 description goes here.',
      options: [
        44, 29, 12, 8, 4, 4
      ]
    },
    {
      type: 'ended',
      name: 'Poll 3',
      date: '09/09/2023',
      percentValue: 0,
      votes: 11140,
      remain: '',
      value1: '99+',
      startTime: '',
      decription: 'Poll 3 description goes here.',
      options: [
        4000, 3000, 2000, 1000, 840, 300 
      ]
    },
    {
      type: 'ended',
      name: 'Poll 2',
      date: '09/09/2023',
      percentValue: 0,
      votes: 12655,
      remain: '',
      value1: '99+',
      startTime: '',
      decription: 'Poll 2 description goes here.',
      options: [
        4500, 3500, 2500, 1500, 400, 255 
      ]
    },
    {
      type: 'ended',
      name: 'Poll 1',
      date: '09/09/2023',
      percentValue: 0,
      votes: 10083,
      remain: '',
      value1: '99+',
      startTime: '',
      decription: 'Poll 1 description goes here.',
      options: [
        3900, 2900, 1900, 900, 300, 183 
      ]
    },
  ]
  return (
    <div className='flex flex-col-reverse items-center justify-center flex-1 gap-6 p-6 lg:flex-row font-karla h-full'>
      <div className='flex flex-col gap-2 items-start justify-start w-full h-full max-h-[calc(100vh-112px)] p-4 rounded-lg lg:w-1/3 bg-panelBgColor overflow-y-auto'>
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
          <PollCard key={poll.name} poll={poll} selectedPoll={selectedPoll} onPollClick={onPollClick} />
        ))}
      </div>
      <div className='relative flex flex-col gap-2 items-start justify-start w-full h-full max-h-[calc(100vh-112px)] p-4 rounded-lg lg:w-2/3 bg-panelBgColor text-gray-600 text-xs overflow-y-auto'>
        <div className='flex flex-col gap-2'>
          <div className='text-white text-lg font-extrabold'>
            {selectedPoll}
          </div>
          {selectedPoll != '' && <div>
            {polls.filter(poll => poll.name == selectedPoll)[0].decription}
          </div>}
        </div>
        {selectedPoll != '' && <>
          <PollOption option={1} color="rgb(255,187,51)" votes={polls.filter(poll => poll.name == selectedPoll)[0].votes} vote={polls.filter(poll => poll.name == selectedPoll)[0].options[0]} />
          <PollOption option={2} color="rgb(255,136,0)" votes={polls.filter(poll => poll.name == selectedPoll)[0].votes} vote={polls.filter(poll => poll.name == selectedPoll)[0].options[1]}/>
          <PollOption option={3} color="rgb(51,177,223)" votes={polls.filter(poll => poll.name == selectedPoll)[0].votes} vote={polls.filter(poll => poll.name == selectedPoll)[0].options[2]}/>
          <PollOption option={4} color="rgb(170,102,204)" votes={polls.filter(poll => poll.name == selectedPoll)[0].votes} vote={polls.filter(poll => poll.name == selectedPoll)[0].options[3]}/>
          <PollOption option={5} color="rgb(255,177,99)" votes={polls.filter(poll => poll.name == selectedPoll)[0].votes} vote={polls.filter(poll => poll.name == selectedPoll)[0].options[4]}/>
          <PollOption option={6} color="rgb(62,182,143)" votes={polls.filter(poll => poll.name == selectedPoll)[0].votes} vote={polls.filter(poll => poll.name == selectedPoll)[0].options[5]}/>
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