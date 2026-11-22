import { OpenAPIHono } from '@hono/zod-openapi'
import {
  albumsHandler,
  artistsHandler,
  audiobooksHandler,
  categoriesHandler,
  chaptersHandler,
  episodesHandler,
  genresHandler,
  libraryHandler,
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
  .route('/', showsHandler)
  .route('/', episodesHandler)
  .route('/', audiobooksHandler)
  .route('/', chaptersHandler)
  .route('/', tracksHandler)
  .route('/', searchHandler)
  .route('/', usersHandler)
  .route('/', playlistsHandler)
  .route('/', libraryHandler)
  .route('/', categoriesHandler)
  .route('/', genresHandler)
  .route('/', playerHandler)
  .route('/', marketsHandler)

export default app
