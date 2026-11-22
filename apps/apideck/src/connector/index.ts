import { OpenAPIHono } from '@hono/zod-openapi'
import {
  apiResourcesHandler,
  apIsHandler,
  connectorDocsHandler,
  connectorResourcesHandler,
  connectorsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', apIsHandler)
  .route('/', apiResourcesHandler)
  .route('/', connectorsHandler)
  .route('/', connectorDocsHandler)
  .route('/', connectorResourcesHandler)

export default app
