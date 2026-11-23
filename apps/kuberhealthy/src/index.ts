import { OpenAPIHono } from '@hono/zod-openapi'
import {
  __rootHandler,
  apiHandler,
  checkHandler,
  healthzHandler,
  jsonHandler,
  metricsHandler,
  openapiJsonHandler,
  openapiYamlHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', metricsHandler)
  .route('/', healthzHandler)
  .route('/', jsonHandler)
  .route('/', apiHandler)
  .route('/', openapiYamlHandler)
  .route('/', openapiJsonHandler)
  .route('/', checkHandler)
  .route('/', __rootHandler)

export default app
