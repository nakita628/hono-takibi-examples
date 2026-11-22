import { OpenAPIHono } from '@hono/zod-openapi'
import {
  articlesHandler,
  authorsHandler,
  collectionsHandler,
  institutionsHandler,
  otherHandler,
  projectsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', otherHandler)
  .route('/', articlesHandler)
  .route('/', authorsHandler)
  .route('/', institutionsHandler)
  .route('/', collectionsHandler)
  .route('/', projectsHandler)

export default app
