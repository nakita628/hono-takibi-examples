import { OpenAPIHono } from '@hono/zod-openapi'
import { mostemailedHandler, mostsharedHandler, mostviewedHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', mostemailedHandler)
  .route('/', mostsharedHandler)
  .route('/', mostviewedHandler)

export default app
