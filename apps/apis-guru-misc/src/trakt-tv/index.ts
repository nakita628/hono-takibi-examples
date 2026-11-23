import { OpenAPIHono } from '@hono/zod-openapi'
import {
  calendarsHandler,
  certificationsHandler,
  checkinHandler,
  commentsHandler,
  countriesHandler,
  genresHandler,
  languagesHandler,
  listsHandler,
  moviesHandler,
  networksHandler,
  oauthHandler,
  peopleHandler,
  recommendationsHandler,
  scrobbleHandler,
  searchHandler,
  showsHandler,
  syncHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', calendarsHandler)
  .route('/', certificationsHandler)
  .route('/', checkinHandler)
  .route('/', commentsHandler)
  .route('/', countriesHandler)
  .route('/', genresHandler)
  .route('/', languagesHandler)
  .route('/', listsHandler)
  .route('/', moviesHandler)
  .route('/', networksHandler)
  .route('/', oauthHandler)
  .route('/', peopleHandler)
  .route('/', recommendationsHandler)
  .route('/', scrobbleHandler)
  .route('/', searchHandler)
  .route('/', showsHandler)
  .route('/', syncHandler)
  .route('/', usersHandler)

export default app
