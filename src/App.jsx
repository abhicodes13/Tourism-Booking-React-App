import './App.css'
import TourCard from './components/TourCard'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export default function App() {
  return (
    <Container>
      <Grid container spacing={5}>
       <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
      </Grid>
      </Container>
  )
}
