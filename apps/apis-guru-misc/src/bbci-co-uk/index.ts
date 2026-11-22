import { OpenAPIHono } from '@hono/zod-openapi'
import {
  aToZHandler,
  categoriesHandler,
  channelsHandler,
  episodesHandler,
  metadataHandler,
  programmesTLEOsHandler,
  regionsHandler,
  searchHandler,
  userHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', aToZHandler)
  .route('/', categoriesHandler)
  .route('/', episodesHandler)
  .route('/', programmesTLEOsHandler)
  .route('/', channelsHandler)
  .route('/', regionsHandler)
  .route('/', metadataHandler)
  .route('/', searchHandler)
  .route('/', userHandler)

export default app
