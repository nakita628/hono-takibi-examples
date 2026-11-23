import { OpenAPIHono } from '@hono/zod-openapi'
import { mobileHandler, oauth2Handler, v1Handler, v2Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', mobileHandler)
  .route('/', oauth2Handler)
  .route('/', v1Handler)
  .route('/', v2Handler)

export default app
