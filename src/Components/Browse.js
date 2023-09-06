import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from "./MainContainer"

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
 <Header/>
 <MainContainer/>
    </div>
  )
}

export default Browse