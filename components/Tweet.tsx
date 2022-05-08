import { ChatAlt2Icon, ChatIcon, HeartIcon, SwitchHorizontalIcon, UploadIcon } from '@heroicons/react/outline'
import React from 'react'

interface Props{
    avatar: string
    username: string
    handlename: string
    tweet: string
    time: string
}

function Tweet({avatar, username, handlename, tweet, time}:Props) {
  return (
    <div>
      <div className="flex space-x-3">
        <img className="h-10 w-10 rounded-full object-cover" src={avatar} />

        <div>
          <div className="flex items-center space-x-1">
            <p className="mr-1 font-bold">{username}</p>
            <p className="hidden">{handlename}</p>
            <p className="text-sm text-gray-500">{time}</p>
          </div>
          <p>{tweet}</p>
        </div>
      </div>
      <div className="flex justify-between mt-5 mr-44">
        <div className='flex cursor-pointer items-center space-x-3 text-gray-400'>
            <ChatAlt2Icon className='h-5 w-5' />
        </div>
              <div className='flex cursor-pointer items-center space-x-3 text-gray-400'>
                  <SwitchHorizontalIcon className='h-5 w-5' />
        </div>
              <div className='flex cursor-pointer items-center space-x-3 text-gray-400'>
                  <HeartIcon className='h-5 w-5' />
        </div>
              <div className='flex cursor-pointer items-center space-x-3 text-gray-400'>
                  <UploadIcon className='h-5 w-5' />
        </div>
      </div>
    </div>
  )
}

export default Tweet