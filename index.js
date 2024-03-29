function App(){

  const [quotes,setQuotes] = React.useState([]);
  const [randomQuote,setRandomQuote] = React.useState("");
  const [color,setColor] = React.useState("#fff");

  React.useEffect(() =>{
    async function fetchData(){
      const response = await fetch("https://type.fit/api/quotes")
      const data = await response.json();

      setQuotes(data);
      let randIndex = Math.floor(Math.random()* data.length);
      setRandomQuote(data[randIndex]);
    }
    fetchData();

  }, []);

    const getNewQuote = ()  => {

     const colors = [
        '#16a085',
        '#27ae60',
        '#2c3e50',
        '#f39c12',
        '#e74c3c',
        '#9b59b6',
        '#FB6964',
        '#342224',
        '#472E32',
        '#BDBB99',
        '#77B1A9',
        '#73A857'
      ];

      let randIndex = Math.floor(Math.random()* quotes.length);
      let randColorIndex = Math.floor(Math.random()* colors.length);
      setRandomQuote(quotes[randIndex]);
      setColor(colors[randColorIndex]);

    }

  return(
    <div style={{backgroundColor: color, minHeight: "100vh"}}>

  <div className="container pt-5" >
      <div className="jumbotron">
        <div className="card">  
          <div className="card-header">Inspiratonal Quotes</div>
          <div className="card-body">
            {randomQuote ? (
               <> 
                <h5 className="card-title"> - {randomQuote.author || "No author !"}</h5>
                <p className="card-text">&quot;{randomQuote.text}&quot; </p>
               </>
            ):(
                <h2>Loading</h2>
            )}
            <div className="row">
              <button onClick={getNewQuote} className="btn btn-primary ml-3"> New Quote </button>
              <a href="https://twitter.com" className="btn btn-warning">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="https://www.tumblr.com" className="btn btn-danger">
                <i className="fa fa-tumblr"></i>
              </a>
            </div>

          </div>
        </div>
     </div>
  </div> 
  </div>
  );
}

ReactDOM.render(<App/>, document.getElementById('app'));