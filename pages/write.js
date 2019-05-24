import Layout from '../comps/MyLayout'

const calculateSomething = (a, b) => a + b

const writePageContent = <p>Well... Let's get to it </p>

export default () => {
    return (
        <Layout content={writePageContent} />
    )
}