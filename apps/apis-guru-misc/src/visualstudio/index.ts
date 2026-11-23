import { OpenAPIHono } from '@hono/zod-openapi'
import {
  apiHandler,
  healthHandler,
  internalHandler,
  tunnelauthHandler,
  warmupHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', apiHandler)
  .route('/', healthHandler)
  .route('/', internalHandler)
  .route('/', tunnelauthHandler)
  .route('/', warmupHandler)

export default app
