import { OpenAPIHono } from '@hono/zod-openapi'
import {
  connectHandler,
  likesHandler,
  meHandler,
  oauth2Handler,
  playlistsHandler,
  repostsHandler,
  resolveHandler,
  tracksHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', connectHandler)
  .route('/', likesHandler)
  .route('/', meHandler)
  .route('/', oauth2Handler)
  .route('/', playlistsHandler)
  .route('/', repostsHandler)
  .route('/', resolveHandler)
  .route('/', tracksHandler)
  .route('/', usersHandler)

export default app
