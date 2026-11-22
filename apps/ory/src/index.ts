import { OpenAPIHono } from '@hono/zod-openapi'
import { courierHandler, frontendHandler, identityHandler, metadataHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', frontendHandler)
  .route('/', courierHandler)
  .route('/', identityHandler)
  .route('/', metadataHandler)

export default app
