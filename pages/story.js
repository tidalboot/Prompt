
import Layout from '../comps/MyLayout'

const Story = props => (
    <Layout>
        <div>
        <h1>{props.story.title}</h1>
        <div>
            {props.story.content}
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
        {/* <Content props={props} /> */}
    </Layout>
)

Story.getInitialProps = async function() {
    const tumbleweed = 'storyStore'
    const fileName = '../stories/' + tumbleweed+ '.json';
    const story = await import(fileName)  
    return { story }
}

export default Story