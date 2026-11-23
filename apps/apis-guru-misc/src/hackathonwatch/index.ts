import { OpenAPIHono } from '@hono/zod-openapi'
import { hackathonsHandler, swaggerDocHandler, swaggerDocJsonHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', hackathonsHandler)
  .route('/', swaggerDocJsonHandler)
  .route('/', swaggerDocHandler)

export default app
