import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data)
        setLoading(false)
      })
      .catch(error => {
        console.log('Error:', error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div className="text-center text-2xl pt-10">Loading...</div>
  }

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold text-center mb-2">Posts from API</h1>
      <p className="text-center text-gray-600 mb-8">Total Posts: {posts.length}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg border border-gray-200">
            <div className="flex justify-between mb-3 text-sm">
              <span className="bg-blue-500 text-white px-2 py-1 rounded font-bold">
                #{post.id}
              </span>
              <span className="bg-gray-200 px-2 py-1 rounded">
                User {post.userId}
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-2 capitalize">{post.title}</h3>
            <p className="text-gray-700">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
