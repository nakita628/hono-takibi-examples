import { OpenAPIHono } from '@hono/zod-openapi'
import { queryV1QueryBackendServiceHandler, queryV1QueryFrontendServiceHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', queryV1QueryBackendServiceHandler)
  .route('/', queryV1QueryFrontendServiceHandler)

export default app
