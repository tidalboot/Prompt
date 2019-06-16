import Layout from '../comps/MyLayout'

const calculateSomething = (a, b) => a + b;

class Write extends React.Component {

    constructor() {
        super()
        this.state = {
            title: "Give it a good name",
            contents: "What's the next story?"
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {

        const target = event.target
        const name = target.name
        const value = target.value

        this.setState({
          [name]: value
        });


        // console.log(event)
        // this.setState({title: event.target.value, contents: this.state.title});
      }
    
    handleSubmit(event) {

        fetch('/makeStory?' + "title=" + this.state.title + "&contents=" + this.state.contents, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            }
          })

        alert(this.state.title + 'has been stored!');
        console.log(this.state.contents)
        event.preventDefault();
      }

    render() { 
        return (
            <div>
                <div>
                    <label>
                        Title:
                        <input value={this.state.title} onChange={this.handleChange} name="title" />
                    </label>
                </div>
                <div>
                    <label>
                        Essay:
                        <textarea value={this.state.contents} onChange={this.handleChange} name="contents" />
                    </label>
                </div>
                <input type="submit" value="Submit" onClick={this.handleSubmit} />
            </div>
        )
    }
 }

export default Write