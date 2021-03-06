import withLayout from '../components/MyLayout';
import Link from 'next/link';

const PostLink = props => (
	<li>
		<Link href={`/post?title=${props.title}`}>
			<a>{props.title}</a>
		</Link>
	</li>
	);

const Page = () => (
	<div>
		<h1>My Blog</h1>
		<ul>
			<PostLink title="Hello Next.js" />
			<PostLink title="Learn Next.js is awesome" />
 			<PostLink title="Deploy apps with Zeit" />			
		</ul>
	</div>
)

export default withLayout(Page);