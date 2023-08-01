import './App.css'
import TourCard from './components/TourCard'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ButtonAppBar from './components/ButtonAppBar';

export default function App() {
  return (
    <div>
        <ButtonAppBar/>
    <Container sx={{marginY:2}}>
      <Grid container spacing={5}>
       <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
      </Grid>
      </Container>
      </div>
  )
}
