import { OpenAPIHono } from '@hono/zod-openapi'
import {
  compileAPIHandler,
  configAPIHandler,
  dataAPIHandler,
  healthAPIHandler,
  policyAPIHandler,
  queryAPIHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', queryAPIHandler)
  .route('/', healthAPIHandler)
  .route('/', dataAPIHandler)
  .route('/', compileAPIHandler)
  .route('/', configAPIHandler)
  .route('/', policyAPIHandler)

export default app
