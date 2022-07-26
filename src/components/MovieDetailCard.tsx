// external imports

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'

export const MovieDetail = ({ selectedMovie }: any) => {
  return (
    <Card sx={{ maxWidth: 600, padding: 20 }}>
      <CardHeader title={selectedMovie?.title} subheader={selectedMovie?.year} />
      <CardMedia component="img" height="300" image={selectedMovie?.posterUrl} alt="movie img" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Plot: {selectedMovie?.plot}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Dircted by: {selectedMovie?.director}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}
