import { OpenAPIHono } from '@hono/zod-openapi'
import {
  entriesHandler,
  monitoredResourceDescriptorsHandler,
  projectsHandler,
  sinksHandler,
  v2Handler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', entriesHandler)
  .route('/', monitoredResourceDescriptorsHandler)
  .route('/', projectsHandler)
  .route('/', v2Handler)
  .route('/', sinksHandler)

export default app
