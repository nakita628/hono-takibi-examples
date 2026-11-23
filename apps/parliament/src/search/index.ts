import { OpenAPIHono } from '@hono/zod-openapi'
import { descriptionHandler, queryExtensionHandler, queryHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', descriptionHandler)
  .route('/', queryHandler)
  .route('/', queryExtensionHandler)

export default app
