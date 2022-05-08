import React, { useEffect, useState } from 'react'
import {
    CalendarIcon,
    EmojiHappyIcon,
    LocationMarkerIcon,
    PhotographIcon,
    SearchCircleIcon,
} from '@heroicons/react/outline'

function TweetBox({data, setData}:any) {
  const [input, setInput] = useState<string>('')
  const [tweetInput, setTweetInput] = useState({
    avatar: 'https://links.papareact.com/gll',
    username: 'Username',
    handlename: '@username',
    tweet: '',
    time: '5 months ago',
  })

  useEffect(() => {
    setTweetInput({
      avatar: 'https://links.papareact.com/gll',
      username: 'Username',
      handlename: '@username',
      tweet: input,
      time: '5 months ago',
    })
  },[input])
 
  
  const tweetSubmitHandler = (event: React.FormEvent<EventTarget>) => {
    // tweetInput.tweet = input
    console.log(tweetInput)
    setInput('')
    setData((prevTweet: any) => {
      return [tweetInput, ...prevTweet ]
    })
    event.preventDefault()
  }

    return (
      <div className="flex space-x-2 p-5">
        <div>
          <img
            className="mt-4 h-14 w-14 rounded-full object-cover"
            src="https://links.papareact.com/gll"
            alt="profile-photo"
          />
        </div>

        <div className="flex flex-1 items-center pl-2">
          <form className="flex flex-1 flex-col" onSubmit={tweetSubmitHandler}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="h-24 w-full text-xl outline-none placeholder:text-xl"
              type="text"
              placeholder="What's happening?"
            />
            <div className="flex items-center">
              <div className="flex flex-1 space-x-2 text-twitter">
                <PhotographIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
                <SearchCircleIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
                <EmojiHappyIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
                <CalendarIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
                <LocationMarkerIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              </div>
              <button
                disabled={!input}
                className="rounded-full bg-twitter px-5 py-2 font-bold text-white disabled:opacity-40"
              >
                Tweet
              </button>
            </div>
          </form>
        </div>
      </div>
    )
}

export default TweetBox