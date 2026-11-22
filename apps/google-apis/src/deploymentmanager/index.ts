import { OpenAPIHono } from '@hono/zod-openapi'
import {
  compositeTypesHandler,
  deploymentsHandler,
  manifestsHandler,
  operationsHandler,
  resourcesHandler,
  typeProvidersHandler,
  typesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', compositeTypesHandler)
  .route('/', deploymentsHandler)
  .route('/', manifestsHandler)
  .route('/', resourcesHandler)
  .route('/', operationsHandler)
  .route('/', typeProvidersHandler)
  .route('/', typesHandler)

export default app
