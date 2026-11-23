import { OpenAPIHono } from '@hono/zod-openapi'
import { helloHandler, listenPathHandler, readyHandler, tykHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', helloHandler)
  .route('/', readyHandler)
  .route('/', tykHandler)
  .route('/', listenPathHandler)

export default app
