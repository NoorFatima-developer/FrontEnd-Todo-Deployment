import axios from 'axios';
import React, { useState } from 'react'
import { server } from '../main';
import toast from 'react-hot-toast';


export default function Home() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  const submitHandler = async() => {
    try {
      const {data} = await axios.post(`${server} ,/tasks/new`,
        { 
          title, 
          description 
        },
        {
          withCredentials: true, 
          headers: {
            'Content-Type': 'application/json'
          }  
        }
      );

      toast.success(data.message);
    } catch (error) {
      toast.error(error.reponse.data.message);
    }
  }

  return (
    <div className='container'>
       <div className='login'>
       <section>
       <form onSubmit={submitHandler}>
        <input 
            type='text' 
            placeholder='Title'
            value={title} 
            onChange={(e)=> setTitle(e.target.value)}
            required
            />
            <input 
            type='text'
            placeholder='Description'
            value={description}
            onChange={(e)=> setDescription(e.target.value)}
            required
            />
            <button type='submit'>
              Add Task
            </button>
        </form>
       </section>
       </div>
    </div>
  )
}
