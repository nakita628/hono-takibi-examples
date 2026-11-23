import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountHandler,
  articlesHandler,
  categoriesHandler,
  collectionsHandler,
  fileHandler,
  institutionHandler,
  institutionsHandler,
  itemTypesHandler,
  licensesHandler,
  projectsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountHandler)
  .route('/', articlesHandler)
  .route('/', categoriesHandler)
  .route('/', collectionsHandler)
  .route('/', fileHandler)
  .route('/', institutionHandler)
  .route('/', institutionsHandler)
  .route('/', itemTypesHandler)
  .route('/', licensesHandler)
  .route('/', projectsHandler)

export default app
