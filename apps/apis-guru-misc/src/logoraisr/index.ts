import { OpenAPIHono } from '@hono/zod-openapi'
import {
  previewsHandler,
  processesHandler,
  projectsHandler,
  reportsHandler,
  resultsHandler,
  uploadsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', previewsHandler)
  .route('/', processesHandler)
  .route('/', projectsHandler)
  .route('/', reportsHandler)
  .route('/', resultsHandler)
  .route('/', uploadsHandler)

export default app
