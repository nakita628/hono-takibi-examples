import { OpenAPIHono } from '@hono/zod-openapi'
import {
  likesHandler,
  meHandler,
  miscellaneousHandler,
  oauthHandler,
  playlistsHandler,
  repostsHandler,
  searchHandler,
  tracksHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', oauthHandler)
  .route('/', likesHandler)
  .route('/', meHandler)
  .route('/', searchHandler)
  .route('/', playlistsHandler)
  .route('/', repostsHandler)
  .route('/', miscellaneousHandler)
  .route('/', tracksHandler)
  .route('/', usersHandler)

export default app
