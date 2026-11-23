import { OpenAPIHono } from '@hono/zod-openapi'
import { accountHandler, apiHandler, goHandler, loginHandler, whoisHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountHandler)
  .route('/', apiHandler)
  .route('/', goHandler)
  .route('/', loginHandler)
  .route('/', whoisHandler)

export default app
