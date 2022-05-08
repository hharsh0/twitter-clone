import { RefreshIcon } from '@heroicons/react/outline'
import React, {useState, useEffect } from 'react'
import Tweet from './Tweet'
import TweetBox from './TweetBox'
import TweetOutput from './TweetOutput'

function Feed() {
   const [data, setData] = useState([
     {
       avatar: 'https://links.papareact.com/gll',
       username: 'Username',
       handlename: '@username',
       tweet: 'Type above to add a tweet',
       time: '5 months ago',
     },
   ])
  return (
    <div className="col-span-7 border-x lg:col-span-5 max-h-screen overflow-scroll">
      {/* header */}
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <RefreshIcon className="mr-5 mt-5 h-8 w-8 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125" />
      </div>
      {/* Tweet box */}
      <div className="border-b">
        <TweetBox data={data} setData={setData} />
      </div>
      <div className="">
        {data.map((e) => {
          return (
            <div className="border-b p-5">
              <Tweet
                avatar={e.avatar}
                username={e.username}
                handlename={e.handlename}
                tweet={e.tweet}
                time={e.time}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Feed