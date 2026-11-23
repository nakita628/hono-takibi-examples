import { OpenAPIHono } from '@hono/zod-openapi'
import {
  antichessHandler,
  apiHandler,
  atomicHandler,
  bookmarkHandler,
  broadcastHandler,
  gameHandler,
  inboxHandler,
  lichessHandler,
  mastersHandler,
  oauthHandler,
  playerHandler,
  standardHandler,
  swissHandler,
  teamHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', apiHandler)
  .route('/', gameHandler)
  .route('/', bookmarkHandler)
  .route('/', swissHandler)
  .route('/', broadcastHandler)
  .route('/', teamHandler)
  .route('/', inboxHandler)
  .route('/', oauthHandler)
  .route('/', mastersHandler)
  .route('/', lichessHandler)
  .route('/', playerHandler)
  .route('/', standardHandler)
  .route('/', atomicHandler)
  .route('/', antichessHandler)

export default app
