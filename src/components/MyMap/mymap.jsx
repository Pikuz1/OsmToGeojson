import React, { useEffect,useState } from "react";
import {MapContainer, GeoJSON, TileLayer} from 'react-leaflet';
import axios from "axios";
import 'leaflet/dist/leaflet.css';
import './style.css';
var osmtogeojson = require('osmtogeojson');

const MyMap= ()=>{
  const [click,setClick] = useState(false)
  const [repo,setRepo] = useState([]) //for handling updating repository
  const [min_lon,setMinlon] = useState(8.75359) //Remember to put co-ordinates under 50000 nodes from OSM
  const [min_lat,setMinlat] = useState(51.71522)
  const [max_lon,setMaxlon] = useState(8.75709)
  const [max_lat,setMaxlat] = useState(51.71736)
  function convert(data){
    const geojson_data = osmtogeojson(data)
    setRepo(geojson_data)
  }
  const getRepo = () =>{
    axios.get(`https://www.openstreetmap.org/api/0.6/map?bbox=${min_lon},${min_lat},${max_lon},${max_lat}`) //Dynamic bbox co-ordinates
    .then(
      (response)=>{
      const myRepo = response.data;
      convert(myRepo);//Converting osm file to geojson
      }
    ).catch(
      (error)=>{
      console.log('Invalid co-ordinates of bbox');
      console.log('Please enter co-ordinated under 50000 nodes from OSM')}
    )
  }

useEffect(()=>{
    setClick(false) //To avoid re-rendering of component
    getRepo();
  },[]);

  return (
    <div className="mymap">
      <div className="mymap_input-container">
        <div className="mymap_input">
          <span>Min_Lon: </span>
          <input value={min_lon} aria-label="min_lon" onChange={(e)=>setMinlon(e.target.value)}/>
        </div>
        <div className="mymap_input">
          <span>Min_Lat: </span>
          <input value={min_lat} onChange={(e)=>setMinlat(e.target.value)}/>
        </div>
        <div className="mymap_input">
          <span>Max_Lon: </span>
          <input value={max_lon} onChange={(e)=>setMaxlon(e.target.value)}/>
        </div>
        <div className="mymap_input">
          <span>Max_Lat: </span>
          <input value={max_lat} onChange={(e)=>setMaxlat(e.target.value)}/>
        </div>
      </div>
      <div className="mymap_input-guide">
        <p>
          We recomend using these co-ordinates for good results due to restriction of using 50000 nodes data from OSM.<br></br>You can use following bbbox coordinates to save time finding other correct co-ordinates:
          min_lon:13.3644,min_lat=52.4859,max_lon=13.3848,max_lat=52.4966
        </p>
        <div><button onClick={()=>setClick(!click)}>show map</button></div>
      </div>
      <div className="mymap_view">
        {click===true?
          <MapContainer style={{height:"80vh"}}
                        zoom={30}
                        center={[max_lat, max_lon]} //center is based on lat,lon of the given location
          >
            <TileLayer  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <GeoJSON attribution="Welcome to the map" zoom={100} data={repo.features}/>
          </MapContainer>:'Click the button to show map'
        }
      </div>
    </div>
  );
};
export default MyMap;