
import Layout from '../comps/MyLayout'
import fetch from 'isomorphic-unfetch'

const Story = props => (
    <Layout>
        <div>
        <h1>{props.title}</h1>
        <div>
            {props.content}
        </div>
        <style jsx>{`
            h1 {
                color: #0C5647;
            }
            `}
        </style>
        <style jsx global>{`
                * {
                    font-family: Helvetica
                }
            `}
        </style>
    </div>
    </Layout>
)

Story.getInitialProps = async context => {

    // const host = process.env.NODE_ENV == 'development' ? 'http://localhost:3000' : 'https://prompt.tidalboot.now.sh'

    const response = await fetch('https://prompt.tidalboot.now.sh' + '/storyData?id=' + context.query.id)
    return await response.json()
}

export default Story