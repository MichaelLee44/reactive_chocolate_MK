import Card from './card.js';
import chocolates from './chocolatedata';
import "./App.css";

const ChocolateList = () =>
{
    return(
        <div className='card-container'>
            {chocolates.map((chocolate,index) => (
                <Card key = {index} item = {chocolate}/>
            ))}
        </div>
    );
}

export default ChocolateList;