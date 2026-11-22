import { OpenAPIHono } from '@hono/zod-openapi'
import {
  apiHandler,
  applicationHandler,
  authenticationHandler,
  endpointHandler,
  eventTypeHandler,
  healthHandler,
  messageAttemptHandler,
  messageHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', apiHandler)
  .route('/', healthHandler)
  .route('/', authenticationHandler)
  .route('/', applicationHandler)
  .route('/', endpointHandler)
  .route('/', eventTypeHandler)
  .route('/', messageHandler)
  .route('/', messageAttemptHandler)

export default app
