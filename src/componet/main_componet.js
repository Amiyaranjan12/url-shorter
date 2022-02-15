import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { TextField,LinearProgress, Link} from '@mui/material';
import api from '../Api/api'
import { textAlign } from '@mui/system';


const Main_operation =() =>{

    const HTTP_URL_VALIDATOR_REGEX = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    const[Link,setlink]=useState('')
    const[shortlink,setshort]=useState('')
    const [retriveLink, setretriveLink] = useState(false);
    const correctLink = (string) => {
      return string.match(HTTP_URL_VALIDATOR_REGEX);
    };
    const submit=(v)=> {
      v.preventDefault();
      if(correctLink(Link)){
        getresult();
        setlink('');
        setretriveLink(!retriveLink);
      }
      else{
        setshort("")
        alert("Invalid url")
      }
     
      
    }
    const getresult=async () =>{
      await api
      .get('shorten?url='+Link)
      .then((Response) =>{
       
        setshort(Response.data.result.short_link2)
        setretriveLink(false)
      })
      .catch((error) =>{
        console.error(error)
      })
    }

    return(

    <div>
        
        <form className="main_form" onSubmit={(v) => submit(v)}>

        <TextField 
          style={{ marginBottom: '10px' }}
          label="Input your Link"
          variant="outlined"
          value={Link}
          onChange={(v) => setlink(v.target.value)}
        />
        {!retriveLink && (
        <Button onClick={(v) => submit(v)} className="main_button" variant="contained" color='primary' >
           CLICK
        </Button>
         )}
         {retriveLink && <LinearProgress />}

       
        
      </form>

      {shortlink &&(
          <div  style={{ textAlign:'center'}} >

             <p>Result: {shortlink} </p>

          </div>
      )}
      
    
        
    </div>

    )
}
export  default Main_operation;