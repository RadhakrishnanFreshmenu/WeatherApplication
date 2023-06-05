import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Input from './components/Input';

function App() {

  const [location,setLocation] = useState('');
  const [data,setData] = useState(null);
  
  const fetchWeather = async() =>
  {
    try
    {
      const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=2bb3344ceb404fe68eb63451230506&q=${location}`);
      setData(response.data);
    }
    catch(error)
    {
      console.error('Error:',error);
    }
    
  };

  useEffect(()=>{
    if(location)
    {
      fetchWeather();
    }
  });

  const handleInputChange = (e) =>
  {
    setLocation(e.target.value);
  }

  return (
    <div className='flex flex-col h-screen'>

      <div className='h-1/3 bg-green-200 items-center justify-center flex flex-col'>
        <h3 className='text-base font-bold'>Weather Details</h3>
        <Input placeholder='Location' value={location} onChange={handleInputChange}/>
      </div>

      <div className='h-2/3 bg-white items-center justify-center flex'>
        {data?
        (
          <div>
            <p>Location : {data.location.name},{data.location.country}</p>
            <p>Temperature : {data.current.temp_c}<sup>o</sup>C</p>
            <p>Condition : {data.current.condition.text}</p>
          </div>
        ):
        (
          <p>No data available!</p>
        )}
      </div>

    </div>
  );
}

export default App;