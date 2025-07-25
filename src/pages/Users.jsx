import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Users() {
  const [users, setUsers] = useState([])
  const [selectedUsers, setSelectedUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/api/users')
      if (Array.isArray(response.data)) {
        setUsers(response.data)
      } else {
        setUsers([])
      }
      setLoading(false)
    } catch (err) {
      setError('Failed to fetch users')
      setLoading(false)
    }
  }

  const toggleSelectUser = (userId) => {
    setSelectedUsers(prev =>
      prev.includes(userId) ? prev.filter(id => id !== userId) : [...prev, userId]
    )
  }

  const handleDelete = async (userId) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return
    try {
      await axios.delete(`/api/user/${userId}`)
      setUsers(users.filter(user => user._id !== userId))
      setSelectedUsers(selectedUsers.filter(id => id !== userId))
      alert('User deleted successfully!')
    } catch (error) {
      console.error('Error deleting user:', error)
      alert('Failed to delete user')
    }
  }

  const handleMassDelete = async () => {
    if (selectedUsers.length === 0) {
      alert('No users selected')
      return
    }
    if (!window.confirm(`Are you sure you want to delete ${selectedUsers.length} users?`)) return

    try {
      await axios.delete('/api/users', { data: { ids: selectedUsers } })
      setUsers(users.filter(user => !selectedUsers.includes(user._id)))
      setSelectedUsers([])
      alert('Selected users deleted successfully!')
    } catch (error) {
      console.error('Error deleting users:', error)
      alert('Failed to delete some users')
    }
  }

  if (loading) return <p className="text-center text-lg mt-10">Loading...</p>
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center">User List</h1>

      {/* Mass Delete Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={handleMassDelete}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 disabled:opacity-50"
          disabled={selectedUsers.length === 0}
        >
          Delete Selected ({selectedUsers.length})
        </button>
      </div>

      <ul className="space-y-4 my-9">
        {users.map(user => (
          <li key={user._id} className="p-4 bg-white rounded shadow flex justify-between items-center">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={selectedUsers.includes(user._id)}
                onChange={() => toggleSelectUser(user._id)}
              />
              <div>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
              </div>
            </div>
            <button
              onClick={() => handleDelete(user._id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Users
