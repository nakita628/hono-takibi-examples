import { OpenAPIHono } from '@hono/zod-openapi'
import {
  attachmentsHandler,
  clustersHandler,
  dataEntitiesHandler,
  documentsHandler,
  scoreHandler,
  scrollHandler,
  searchHandler,
  versionsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', dataEntitiesHandler)
  .route('/', documentsHandler)
  .route('/', clustersHandler)
  .route('/', scoreHandler)
  .route('/', versionsHandler)
  .route('/', attachmentsHandler)
  .route('/', scrollHandler)
  .route('/', searchHandler)

export default app
