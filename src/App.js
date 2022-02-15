import Grid from '@mui/material/Grid';
import './App.css';
import Main_operation from './componet/main_componet';





function App() {
 

  return (
   <div className='App'>
      
     
      <Grid className="grid_con" container direction='column' justifyContent="center" alignItems="center">
          <h1>## GOOD LUCK ##</h1>
         <Main_operation/>
          
      </Grid>
   </div>
  
  );
}

export default App;
