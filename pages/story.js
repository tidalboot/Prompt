
import { withRouter } from 'next/router'
import Layout from '../comps/MyLayout'
import Markdown from 'react-markdown'

const Content = withRouter(props => (
    <div>
        <h1>{props.router.query.title}</h1>
        <div className="markdown">
            <Markdown source={`
            This is the start of something new [link] (/link).

            And yes we're not done yet

            ### This is a title
            `}    
            />
        </div>
        <style jsx>{`
            .markdown {
                font-familt: 'Arial';
                color: brown;
            }
            `}
        </style>
    </div>

))

const Story = props => (
    <Layout>
        <Content />
    </Layout>
)

export default Story