import { OpenAPIHono } from '@hono/zod-openapi'
import {
  authHandler,
  backdropsHandler,
  collectionHandler,
  discoverHandler,
  genresHandler,
  issueCommentHandler,
  issueHandler,
  keywordHandler,
  languagesHandler,
  mediaHandler,
  movieHandler,
  networkHandler,
  personHandler,
  regionsHandler,
  requestHandler,
  searchHandler,
  serviceHandler,
  settingsHandler,
  statusHandler,
  studioHandler,
  tvHandler,
  userHandler,
  watchprovidersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', statusHandler)
  .route('/', settingsHandler)
  .route('/', authHandler)
  .route('/', userHandler)
  .route('/', searchHandler)
  .route('/', discoverHandler)
  .route('/', requestHandler)
  .route('/', movieHandler)
  .route('/', tvHandler)
  .route('/', personHandler)
  .route('/', mediaHandler)
  .route('/', collectionHandler)
  .route('/', serviceHandler)
  .route('/', regionsHandler)
  .route('/', languagesHandler)
  .route('/', studioHandler)
  .route('/', networkHandler)
  .route('/', genresHandler)
  .route('/', backdropsHandler)
  .route('/', issueHandler)
  .route('/', issueCommentHandler)
  .route('/', keywordHandler)
  .route('/', watchprovidersHandler)

export default app
