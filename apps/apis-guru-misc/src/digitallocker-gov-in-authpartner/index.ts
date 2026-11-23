import { OpenAPIHono } from '@hono/zod-openapi'
import { accountHandler, oauth2Handler, signupHandler, statisticsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountHandler)
  .route('/', oauth2Handler)
  .route('/', signupHandler)
  .route('/', statisticsHandler)

export default app
