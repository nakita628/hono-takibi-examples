import { OpenAPIHono } from '@hono/zod-openapi'
import {
  lendingRequestsHandler,
  printoutsHandler,
  requestedResourcesHandler,
  testHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', printoutsHandler)
  .route('/', requestedResourcesHandler)
  .route('/', lendingRequestsHandler)
  .route('/', testHandler)

export default app
