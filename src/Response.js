
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      response: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/5dd191e362496912a0065c0a")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            response: result.response
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <table>
          <tr>
            <td><b>Id: </b></td>
            <td>{response.id}</td>
          </tr>
          <tr>
            <td><b>EdgeX Id: </b></td>
            <td>{response.edgexId}</td>
          </tr>
          <tr>
            <td><b>Identity: </b></td>
            <td>response.identity}</td>
          </tr>
          <tr>
            <td><b>Location: </b></td>
            <td>{response.location}</td>
          </tr>
          <tr>
            <td><b>Device: </b></td>
            <td>{response.device}</td>
          </tr>
          <tr>
            <td><b>Type: </b></td>
            if ({response.typeCapital} == 'O') {
              <td>Outgoing</td>
            } else {
              <td>Incoming</td>
            }
          </tr>
          <tr>
            <td><b>Time: </b></td>
            <td>{response.attempted}</td>
          </tr>
          <tr>
            <td><b>Accepted: </b></td>
            if ({response.accepted}) {
              <td style="background-color:chartreuse"></td>
            } else {
              <td style="background-color:red"></td>
            }
          </tr>
        </table>
        <img alt={response.identity} src='localhost:8080/files/' + {response.id} />
      );
    }
  }
}