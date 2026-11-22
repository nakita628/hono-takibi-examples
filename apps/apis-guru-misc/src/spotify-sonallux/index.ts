import { OpenAPIHono } from '@hono/zod-openapi'
import {
  albumsHandler,
  artistsHandler,
  audiobooksHandler,
  categoriesHandler,
  chaptersHandler,
  episodesHandler,
  genresHandler,
  marketsHandler,
  playerHandler,
  playlistsHandler,
  searchHandler,
  showsHandler,
  tracksHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', albumsHandler)
  .route('/', artistsHandler)
  .route('/', tracksHandler)
  .route('/', audiobooksHandler)
  .route('/', categoriesHandler)
  .route('/', playlistsHandler)
  .route('/', chaptersHandler)
  .route('/', episodesHandler)
  .route('/', marketsHandler)
  .route('/', usersHandler)
  .route('/', playerHandler)
  .route('/', showsHandler)
  .route('/', genresHandler)
  .route('/', searchHandler)

export default app
