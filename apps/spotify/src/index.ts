import { OpenAPIHono } from '@hono/zod-openapi'
import {
  albumsHandler,
  artistsHandler,
  audioAnalysisHandler,
  audiobooksHandler,
  audioFeaturesHandler,
  browseHandler,
  chaptersHandler,
  episodesHandler,
  marketsHandler,
  meHandler,
  playlistsHandler,
  recommendationsHandler,
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
  .route('/', meHandler)
  .route('/', chaptersHandler)
  .route('/', tracksHandler)
  .route('/', searchHandler)
  .route('/', playlistsHandler)
  .route('/', usersHandler)
  .route('/', browseHandler)
  .route('/', audioFeaturesHandler)
  .route('/', audioAnalysisHandler)
  .route('/', recommendationsHandler)
  .route('/', marketsHandler)

export default app
