import Header from './header';
import ChocolateList from './chocolatelist';
import plainmilk from './plainmilk.jpg'

function App() {
  const title = "Choceur Chocolates"

  return (
    <div className='App'>
      <Header headingTitle = {title}/>
      <ChocolateList></ChocolateList>
    </div>
  );
}

export default App;
