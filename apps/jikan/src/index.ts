import { OpenAPIHono } from '@hono/zod-openapi'
import {
  animeHandler,
  charactersHandler,
  clubsHandler,
  genresHandler,
  magazinesHandler,
  mangaHandler,
  peopleHandler,
  producersHandler,
  randomHandler,
  recommendationsHandler,
  reviewsHandler,
  schedulesHandler,
  seasonsHandler,
  topHandler,
  usersHandler,
  watchHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', animeHandler)
  .route('/', charactersHandler)
  .route('/', clubsHandler)
  .route('/', genresHandler)
  .route('/', magazinesHandler)
  .route('/', mangaHandler)
  .route('/', peopleHandler)
  .route('/', producersHandler)
  .route('/', randomHandler)
  .route('/', recommendationsHandler)
  .route('/', reviewsHandler)
  .route('/', schedulesHandler)
  .route('/', usersHandler)
  .route('/', seasonsHandler)
  .route('/', topHandler)
  .route('/', watchHandler)

export default app
