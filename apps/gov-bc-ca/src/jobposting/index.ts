import { OpenAPIHono } from '@hono/zod-openapi'
import {
  industriesHandler,
  jobsHandler,
  jobTypesHandler,
  majorProjectsHandler,
  regionsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', industriesHandler)
  .route('/', jobTypesHandler)
  .route('/', jobsHandler)
  .route('/', majorProjectsHandler)
  .route('/', regionsHandler)

export default app
