import { OpenAPIHono } from '@hono/zod-openapi'
import { chatHandler, externalHandler, internalHandler, objectsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', internalHandler)
  .route('/', objectsHandler)
  .route('/', externalHandler)
  .route('/', chatHandler)

export default app
