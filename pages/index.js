
import Layout from '../comps/MyLayout.js'
import Link from 'next/link'


function getStories() {
    return [
        { id: 'tumbleweed', title: "Tumbleweed Valley" },
        { id: 'lostGod', title: "In the Temple of the Lost God" },
        { id: 'icharus', title: "Icharus Rising" },
        { id: 'scarsOfMalo', title: "Scars of Malo" },
        { id: 'test', title: "foo" }
    ]
}

const PostLink = props => (
    <li>
        <Link  href={`/story?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
        <style jsx>
            {`
                li {
                    list-style: none;
                    margin: 5px 0;
                }

                a {
                    text-decoration: none;
                    color: blue;
                }

                a:hover {
                    opacity: 0.5;
                }
            `}
        </style>
    </li>
)

export default () => (
    <Layout>
        <h1>Latest Writing Prompts</h1>
        <ul>
            { getStories().map(story => (
                <li key={story.id}>
                    <PostLink id={story.id} title={story.title} />
                </li>
            )) }
        </ul>
        <style jsx>
            {`
                h1, a {
                    font-familt: 'Arial';
                }

                ul {
                    padding: 0;
                }
            `}
        </style>

    </Layout>
)