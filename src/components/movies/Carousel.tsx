// external imports
import { makeStyles } from '@material-ui/core/styles'
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'
import ImageListItemBar from '@material-ui/core/ImageListItemBar'

// types
interface Item {
  id?: number
  title?: string
  year?: string
  duration?: string
  genres?: string[]
  director?: string
  actors?: string
  plot?: string
  posterUrl?: string
}

interface IProps {
  items: Item[]
  handleOpenModal: () => void
  handleSetSelectetMovie: (arg: Item) => void
}

// MUI styles
const useStyles = makeStyles({
  imageList: {
    flexWrap: 'nowrap',
    padding: 30,
  },
  image: {
    maxWidth: 250,
    margin: 10,
    borderRadius: 10,
  },
})

export const Carousel: React.FC<IProps> = ({
  items,
  handleOpenModal,
  handleSetSelectetMovie,
}: IProps) => {
  const classes = useStyles()

  const handleSelectMovie = (movie: Item) => {
    return handleOpenModal(), handleSetSelectetMovie(movie)
  }

  return (
    <ImageList className={classes.imageList}>
      {items?.map(movie => (
        <ImageListItem
          key={movie?.id}
          className={classes.image}
          onClick={() => handleSelectMovie(movie)}
        >
          <img src={movie?.posterUrl} />
          <ImageListItemBar title={movie?.title} />
        </ImageListItem>
      ))}
    </ImageList>
  )
}
