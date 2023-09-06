// Import your Client Component
import Home from './home'
import { getSortedPostsData } from '../lib/posts';

export default async function Page() {
  // Fetch data directly in a Server Component
  const recentPosts = getSortedPostsData()
  // Forward fetched data to your Client Component
  return <Home allPostsData={recentPosts} />
}
