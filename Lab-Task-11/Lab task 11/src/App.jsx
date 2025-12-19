import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])
  const [dogImage, setDogImage] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchDogImage = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') setDogImage(data.message)
      })
      .catch(error => console.log('Dog fetch error:', error))
  }

  useEffect(() => {
    setLoading(true)
    Promise.all([
      fetch('https://jsonplaceholder.typicode.com/posts').then(r => r.json()),
      fetch('https://jsonplaceholder.typicode.com/users').then(r => r.json()),
      fetch('https://dog.ceo/api/breeds/image/random').then(r => r.json())
    ])
      .then(([postsData, usersData, dogData]) => {
        setPosts(postsData || [])
        setUsers(usersData || [])
        if (dogData && dogData.status === 'success') setDogImage(dogData.message)
      })
      .catch(error => console.log('Combined fetch error:', error))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div className="text-center text-2xl pt-10">Loading...</div>

  return (
    <div className="container mx-auto p-5 space-y-10">
      <section>
        <h1 className="text-3xl font-bold text-center mb-2">Posts from API</h1>
        <p className="text-center text-gray-600 mb-4">Total Posts: {posts.length}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.slice(0, 9).map((post) => (
            <div key={post.id} className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg border border-gray-200">
              <div className="flex justify-between mb-3 text-sm">
                <span className="bg-blue-500 text-white px-2 py-1 rounded font-bold">#{post.id}</span>
                <span className="bg-gray-200 px-2 py-1 rounded">User {post.userId}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 capitalize">{post.title}</h3>
              <p className="text-gray-700">{post.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-center mb-2">Users from API</h2>
        <p className="text-center text-gray-600 mb-4">Total Users: {users.length}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user) => (
            <div key={user.id} className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg border border-gray-200">
              <div className="flex justify-between mb-3 text-sm">
                <span className="bg-green-500 text-white px-2 py-1 rounded font-bold">#{user.id}</span>
                <span className="bg-gray-200 px-2 py-1 rounded">{user.username}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{user.name}</h3>
              <p className="text-gray-600 text-sm mb-2"><strong>Email:</strong> {user.email}</p>
              <p className="text-gray-600 text-sm mb-2"><strong>Phone:</strong> {user.phone}</p>
              <p className="text-gray-600 text-sm"><strong>Website:</strong> {user.website}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex justify-center">
        <div className="max-w-2xl w-full">
          <h2 className="text-2xl font-semibold text-center mb-4">Random Dog</h2>
          {dogImage && (
            <div className="bg-white p-5 rounded-lg shadow-lg border border-gray-200">
              <img src={dogImage} alt="Random dog breed" className="w-full h-auto rounded-lg object-cover mb-4" />
              <button
                onClick={fetchDogImage}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
              >
                Get Another Dog 🐕
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default App
