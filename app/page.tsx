import { HeaderPost } from './components/HeaderPost'
import { LayoutPosts } from './components/LayoutPosts'
import PostsApiInterface from './models/postsApi.model'
import { getPosts } from './utilities'

export default async function Home() {
	const posts: PostsApiInterface = await getPosts()
	return (
		<div className='marginAuto'>
			<HeaderPost news={posts.articles.slice(0, 3)} />
			<LayoutPosts news={posts.articles.slice(4)} />
		</div>
	)
}
