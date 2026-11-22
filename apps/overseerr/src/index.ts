import { OpenAPIHono } from '@hono/zod-openapi'
import {
  authHandler,
  collectionHandler,
  issueHandler,
  mediaHandler,
  moviesHandler,
  otherHandler,
  personHandler,
  publicHandler,
  requestHandler,
  searchHandler,
  serviceHandler,
  settingsHandler,
  tmdbHandler,
  tvHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', publicHandler)
  .route('/', settingsHandler)
  .route('/', authHandler)
  .route('/', usersHandler)
  .route('/', searchHandler)
  .route('/', requestHandler)
  .route('/', moviesHandler)
  .route('/', tvHandler)
  .route('/', personHandler)
  .route('/', mediaHandler)
  .route('/', collectionHandler)
  .route('/', serviceHandler)
  .route('/', tmdbHandler)
  .route('/', issueHandler)
  .route('/', otherHandler)

export default app
