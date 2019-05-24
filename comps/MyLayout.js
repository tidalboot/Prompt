import Header from './Header'

const x = 10 / 2

const y = "5"

const doesItMatch = x == y

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
}

console.log({layoutStyle})
console.log(doesItMatch)

export default props => (

    <div style={layoutStyle}>        
        <Header />
        {props.children}
    </div>
)