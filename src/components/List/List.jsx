import { useState } from 'react'; 
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select  } from '@material-ui/core';
import useStyles from './styles';
import PlaceDetails from "../PlaceDetails/PlaceDetails"

const dummy_list= [
  {name: 'hotel oneone'},
  {name: 'hotel twotwo'},
  {name: 'hotel threethree'},
  {name: 'hotel oneone'},
  {name: 'hotel twotwo'},
  {name: 'hotel threethree'},
  {name: 'hotel oneone'},
  {name: 'hotel twotwo'},
  {name: 'hotel threethree'},
  {name: 'hotel oneone'},
  {name: 'hotel twotwo'},
  {name: 'hotel threethree'},
];

function List() {
  const [type, setType] = useState("hotels");
  const [rating, setRating] = useState('');
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h4">Hotels Near You</Typography>
      <FormControl className={classes.formControl} >
         <InputLabel>Type</InputLabel>
         <Select value={type} onChange={(e) => setType(e.target.value)}>
           <MenuItem value="hotels">Hotels</MenuItem>
           <MenuItem value="restaurants">Restaurants</MenuItem>
           <MenuItem value="attractions">Attractions</MenuItem>
         </Select>
      </FormControl>
      <FormControl className={classes.formControl} >
         <InputLabel>Rating</InputLabel>
         <Select value={rating} onChange={(e) => setRating(e.target.value)}>
           <MenuItem value={0}>All</MenuItem>
           <MenuItem value={3}>Above 3</MenuItem>
           <MenuItem value={4}>Above 4</MenuItem>
           <MenuItem value={4.5}>Above 4.5</MenuItem>
         </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {dummy_list?.map((item, i) =>
          <Grid item sm={12} key={i}>  
          <PlaceDetails item={item}/>
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default List;
