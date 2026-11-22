import { OpenAPIHono } from '@hono/zod-openapi'
import {
  attributeNamespacesHandler,
  attributesHandler,
  buildHandler,
  configurationHandler,
  distributionsHandler,
  generalInformationHandler,
  groupsHandler,
  issueTrackersHandler,
  personHandler,
  publishedBinariesHandler,
  requestHandler,
  workersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', generalInformationHandler)
  .route('/', attributeNamespacesHandler)
  .route('/', attributesHandler)
  .route('/', buildHandler)
  .route('/', configurationHandler)
  .route('/', distributionsHandler)
  .route('/', groupsHandler)
  .route('/', issueTrackersHandler)
  .route('/', personHandler)
  .route('/', publishedBinariesHandler)
  .route('/', requestHandler)
  .route('/', workersHandler)

export default app
