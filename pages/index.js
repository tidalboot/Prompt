
import Layout from '../comps/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const PostLink = props => (
    <li>
        <Link as={`/story/${props.id}`}  href={`/story/${props.id}`}>
            <a>{props.title}</a>
        </Link>
        <style jsx global>{`
                * {
                    font-family: Helvetica
                }
            `}
        </style>
        <style jsx>
            {`
                li {
                    list-style: none;
                    margin: 5px 0;
                }

                a {
                    text-decoration: none;
                    color: #CC838F;
                }

                a:hover {
                    opacity: 0.5;
                }
            `}
        </style>
    </li>
)

const Index = props => (
    <Layout>
        <h1>Latest Writing Prompts</h1>
        <div>
            { props.storyNames.map(story => (
                <PostLink id={story.id} title={story.id} />
            )) }
        </div>
        <style jsx>
            {`
                h1, a {
                    color: #0C5647;
                }

                ul {
                    padding: 0;
                }
            `}
        </style>

    </Layout>
)

Index.getInitialProps = async () => {

    console.log('made it')
    const host = process.env.NODE_ENV == 'development' ? 'http://localhost:3000' : 'https://prompt.sloppy.zone'

    console.log('getting response from' + host)
    const response = await fetch(host + '/allStories')

    console.log('response for all stories was: ' + JSON.stringify(response))

    return await response.json()
}

export default Index