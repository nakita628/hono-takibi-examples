import { OpenAPIHono } from '@hono/zod-openapi'
import {
  attachmentHandler,
  batchHandler,
  bucketsHandler,
  changessHandler,
  collectionChangesetHandler,
  collectionsHandler,
  groupsHandler,
  recordsHandler,
  utilitiesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', utilitiesHandler)
  .route('/', batchHandler)
  .route('/', bucketsHandler)
  .route('/', changessHandler)
  .route('/', collectionChangesetHandler)
  .route('/', collectionsHandler)
  .route('/', recordsHandler)
  .route('/', attachmentHandler)
  .route('/', groupsHandler)

export default app
