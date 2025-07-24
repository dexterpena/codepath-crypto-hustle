import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js'
import LandmarkCard from './LandmarkCard';

// TODO: include supabase credentials
const SUPABASE_URL = ''
const SUPABASE_KEY = ''

// Create a single supabase client for interacting with your database
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

export default function App(props) {
  const [landmarks, setLandmarks] = useState([])

  // TODO: get landmarks
  useEffect(() => {
    const getLandmarks = async () => {
      let { data, error } = await supabase.from('landmarks').select()
      if (data) {
        console.log(data)
        setLandmarks(data)
      }
      if (error) {
        console.log(error)
      }
    }
    getLandmarks()
  }, [])

  async function createLandmark () {
    const newLandmark = {
      name: 'Stonehenge',
      country: 'England',
      photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Stonehenge2007_07_30.jpg/500px-Stonehenge2007_07_30.jpg'
    }

    // TODO: insert new landmark to the db
  }

  const editLandmark = async (id) => {
    // TODO: implement function to edit landmark
  }

  const deleteLandmark = async (id) => {
    // TODO: implement function to delete landmark
  }

  return (
    <div className='App'>
      <h1>Landmarks</h1>
      <div className='cards'>
        {landmarks.map((landmark) => 
          <LandmarkCard
            id={landmark.id}
            key={landmark.id}
            name={landmark.name}
            country={landmark.country}
            photo_url={landmark.photo_url}
            edit={editLandmark}
            delete={deleteLandmark}
          />)}
      </div>
      <button onClick={createLandmark}>Add Landmark</button>
    </div>
  );
}