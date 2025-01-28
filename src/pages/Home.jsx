import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { server } from '../main';
import toast from 'react-hot-toast';
import TodoItem from '../components/TodoItem';


export default function Home() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setloading] = useState(false);
  const [tasks, setTasks] = useState([]);

  const submitHandler = async(e) => {
  e.preventDefault();
    try {
      setloading(true);
      const {data} = await axios.post(
        `${server}/tasks/new`,
        { 
          title, 
          description 
        },
        {
          withCredentials: true, 
          headers: {
            'Content-Type': 'application/json'
          },
        }
      );

      toast.success(data.message);
      setTitle("");
      setDescription("");
      setloading(false);
    } catch (error) {
      toast.error(error.reponse?.data?.message || "Something went wrong");
      setloading(false);
    }
  };

  useEffect(()=> {
    axios.get(`${server}/tasks/me`,{
    withCredentials: true,
  })
  .then(res => {
    // console.log(res.data.tasks);
    setTasks(res.data.tasks);
  })
  .catch((e)=>{
    toast.error(e.response?.data?.message || "Something went wrong");
  })
}, []);

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
            <button type='submit' disabled={loading}>
              Add Task
            </button>
        </form>
       </section>
       </div>

{/* map() ek JavaScript method hai jo array ke har ek element ko loop kar ke transform karta hai aur ek naya array return karta hai. */}
       <section className='todosContainer'>
        {tasks.map((i)=>(
          // <div key={i._id}>{i.title}</div>
          <TodoItem title={i.title} description={i.description} isCompleted={i.isCompleted}/>
        ))}
       </section> 

    </div>
  )
}
