import { OpenAPIHono } from '@hono/zod-openapi'
import { faviconIcoHandler, pingHandler, v1Handler, v2Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', faviconIcoHandler)
  .route('/', pingHandler)
  .route('/', v1Handler)
  .route('/', v2Handler)

export default app
