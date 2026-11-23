import { OpenAPIHono } from '@hono/zod-openapi'
import {
  atozHandler,
  categoriesHandler,
  channelsHandler,
  clipsHandler,
  episodesHandler,
  groupsHandler,
  homeHandler,
  programmesHandler,
  regionsHandler,
  schemaHandler,
  searchHandler,
  searchSuggestHandler,
  statusHandler,
  userHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', atozHandler)
  .route('/', categoriesHandler)
  .route('/', channelsHandler)
  .route('/', clipsHandler)
  .route('/', episodesHandler)
  .route('/', groupsHandler)
  .route('/', homeHandler)
  .route('/', programmesHandler)
  .route('/', regionsHandler)
  .route('/', schemaHandler)
  .route('/', searchHandler)
  .route('/', searchSuggestHandler)
  .route('/', statusHandler)
  .route('/', userHandler)

export default app
