import React from 'react'

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const res = await fetch('http://jsonplaceholder.typicode.com/users', { cache: 'no-store' })
  const users: User[] = await res.json()
  // run 'npm run build'
  // run 'npm start' to run the version built for production
  // then observe what happens to the time when a client refreshs...
  //!
  // add an object to disable caching and then build the app again
  // run it and observe the behaviour at refresh
  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  )
}

export default UsersPage