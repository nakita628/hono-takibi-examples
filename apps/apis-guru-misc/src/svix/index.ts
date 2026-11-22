import { OpenAPIHono } from '@hono/zod-openapi'
import {
  applicationHandler,
  authenticationHandler,
  backgroundTasksHandler,
  endpointHandler,
  eventTypeHandler,
  healthHandler,
  integrationHandler,
  messageAttemptHandler,
  messageHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', applicationHandler)
  .route('/', messageAttemptHandler)
  .route('/', endpointHandler)
  .route('/', integrationHandler)
  .route('/', messageHandler)
  .route('/', authenticationHandler)
  .route('/', backgroundTasksHandler)
  .route('/', eventTypeHandler)
  .route('/', healthHandler)

export default app
