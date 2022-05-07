import { SearchIcon } from '@heroicons/react/outline'
import React,{useState} from 'react'
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from 'react-twitter-embed'

function Widgets() {
  const [search, setSearch] = useState('elonmusk')
  return (
    <div className="mt-2 px-2 col-span-2 hidden lg:inline">
      <div className="mt-2 flex items-center space-x-2 rounded-full bg-gray-100 p-3">
        <SearchIcon className="h-5 w-5 text-gray-400" />
        <input
          className="flex-1 bg-transparent outline-none"
          type="text"
          placeholder="Search twitter"
        />
      </div>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName={search}
        options={{ height: 1000 }}
      />
    </div>
  )
}

export default Widgets