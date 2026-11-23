import { OpenAPIHono } from '@hono/zod-openapi'
import {
  aboutHandler,
  architecturesHandler,
  attributeHandler,
  buildHandler,
  configurationHandler,
  distributionsHandler,
  groupHandler,
  issueTrackersHandler,
  personHandler,
  publishedHandler,
  requestHandler,
  requestViewCollectionHandler,
  workerCmdCheckconstraintsHandler,
  workerHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', aboutHandler)
  .route('/', architecturesHandler)
  .route('/', attributeHandler)
  .route('/', buildHandler)
  .route('/', configurationHandler)
  .route('/', distributionsHandler)
  .route('/', groupHandler)
  .route('/', issueTrackersHandler)
  .route('/', personHandler)
  .route('/', publishedHandler)
  .route('/', requestHandler)
  .route('/', requestViewCollectionHandler)
  .route('/', workerHandler)
  .route('/', workerCmdCheckconstraintsHandler)

export default app
