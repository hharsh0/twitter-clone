import React from 'react'

function Tweet() {
  return (
    <div>
      <div className="flex space-x-3">
        <img
          className="h-10 w-10 rounded-full object-cover"
          src="https://links.papareact.com/gll"
        />

        <div>
          <div className="flex items-center space-x-1">
            <p className="mr-1 font-bold">Username</p>
            <p className="hidden">@username</p>
            <p className="text-sm text-gray-500">5 months ago</p>
          </div>
          <p>This is a tweet</p>
        </div>
      </div>
    </div>
  )
}

export default Tweet