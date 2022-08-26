import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react'
import Navbar from './components/Navbar'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Card from './components/Card'

function App() {
  const [creatures, setCreatures] = useState([])

  const [newCreature, setNewCreature] = useState('')
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [species, setSpecies] = useState('')
  const [location, setLocation] = useState('')
  const [image, setImage] = useState('')
  const [formPage, setFormPage] = useState(false)
  


  const handleNewName = (event) => {
    setName(event.target.value)
  }
  const handleNewSpeciesChange = (event) => {
    setSpecies(event.target.value)
  }
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      this.setImage({
        image: URL.createObjectURL(event.target.files[0])
      });
    }
  }
  const handleNewLocation = (event)=>{
    setLocation(event.target.value);
  }
  const handleNewAgeChange = (event) => {
    setAge(event.target.value)
  }
  


/////// New Creature Form
const handleNewCreatureFormSubmit = (event)=>{
  event.preventDefault();
  axios.post(
    'http://localhost:3000/creatures',
    {
      // name:newName,
      // species:newSpecies,
      // age:newAge,
      // location:newLocation,
      // image:newImage,
    }
  ).then(()=>{
    axios.get('http://localhost:3000/creatures')
      .then((response) => {
        setCreatures(response.data)
      })
  })
}
  
  useEffect(()=>{axios
    .get('http://localhost:3000/creatures')
    .then((response)=>{
      setCreatures(response.data)
      setFormPage(false)
    })
  },[])

// Delete Listing Handle
const handleDelete = (creatureData)=>{  // <-- the creatureData is a param, can be named anything
  axios
      .delete(`http://localhost:3000/creatures/${creatureData._id}`) // <-- make sure param matches literal here
      .then(()=>{
          axios
              .get('http://localhost:3000/creatures')
              .then((response)=>{
                  setCreatures(response.data)
              })
      })
}

  /////// UPDATE
  const handleUpdateCreature = (creatureData)=>{
    axios
        .put(
            `http://localhost:3000/creature/${creatureData._id}`,
            {
              image:!creatureData.image,
              name:!creatureData.name,
              species:!creatureData.species,
              age:!creatureData.age,
              location:!creatureData.location,
            }
        )
        .then(()=>{
            axios
                .get('http://localhost:3000/creatures')
                .then((response)=>{
                    setCreatures(response.data)
                })
        })
  }


  return (
    <div className="main">
      <Navbar setFormPage={setFormPage} formPage={formPage}/>
      <h1>Creature DB - Only the Important Monsters!</h1>


      {formPage ? 
      <section>
        <div className="form-container mb-3">
          <h3>Register New Creature...</h3><hr />
        <img src={creatures.image} className="card-image" alt="Profile" />
            Pic: <input type="file" onChange={onImageChange} className="fileType"/><br />
          <form onSubmit={handleNewCreatureFormSubmit}>
            Name: <input type='text' onChange={handleNewName} /><br />
            Species: <input type='text' onChange={handleNewSpeciesChange} /><br />
            Age: <input type='number' onChange={handleNewAgeChange} /><br />
            Location: <input type="text" onChange={handleNewLocation} /><br />
            <input type="submit" value="Register Monster" />
          </form>
        </div>
      </section> : ''}
      
      <Card creatures={creatures}/>

    </div>
  );
}

export default App;