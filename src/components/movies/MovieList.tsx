// external imports
import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Container from '@mui/material/Container'

// internal imports
import { Carousel } from './Carousel'
import { MovieDetail } from '../MovieDetailCard'

// types
interface IMovies {
  title?: string
  items?: Item[]
}

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

// MUI styles

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  display: 'flex',
  justifyContent: 'center',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  height: 800,
  bgcolor: '#141518',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export const Movies: React.FC = () => {
  const [movies, setMovies] = useState<any>([])
  const [selectedMovie, setSelectedMovie] = useState<Item>()
  const [openModal, setOpenModal] = useState(false)
  const handleOpenModal = () => setOpenModal(true)
  const handleCloseModal = () => setOpenModal(false)

  const handleEscapeKey = useCallback(
    (e: { key: string }) => {
      if (e.key === 'Escape' && openModal) {
        setOpenModal(false)
      }
    },
    [setOpenModal, openModal],
  )

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeKey)
    return () => document.removeEventListener('keydown', handleEscapeKey)
  }, [handleEscapeKey])

  useEffect(() => {
    axios.get<IMovies>(`http://localhost:8000/carousels`).then(res => {
      setMovies(res.data)
    })
  }, [])

  const handleSetSelectetMovie = (movie: Item) => {
    setSelectedMovie(movie)
  }

  return (
    <Box sx={{ bgcolor: '#141518', height: '100vh', color: 'white', padding: 10 }}>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <MovieDetail selectedMovie={selectedMovie} />
        </Box>
      </Modal>

      {movies?.map(({ title, items }: any, i: number) => (
        <Box sx={{ padding: 2 }} key={i}>
          <p>{title}</p>
          <Carousel
            items={items}
            handleOpenModal={handleOpenModal}
            handleSetSelectetMovie={handleSetSelectetMovie}
          />
        </Box>
      ))}
    </Box>
  )
}
