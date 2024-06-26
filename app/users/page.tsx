import React from 'react'

interface User {
  id: number;
  name: string;
}
// 33.26
const UsersPage = async () => {
  const res = await fetch('http://jsonplaceholder.typicode.com/users')
  const users: User[] = await res.json()

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  )
}

export default UsersPage