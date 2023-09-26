import React, {Suspense} from 'react'
import UsersList from '@/components/users/UsersList'
import Loading from './loading'

const Users = () => {
  return (
    <main>
     <nav>
        <div>
          <h2>Users</h2>
          <p>
            <small>Currently available users</small>
          </p>
        </div>
      </nav>

        <Suspense fallback={<Loading />}>
        <UsersList />
        </Suspense>
    </main>
  )
}

export default Users