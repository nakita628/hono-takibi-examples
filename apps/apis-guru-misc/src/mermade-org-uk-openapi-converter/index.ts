import { OpenAPIHono } from '@hono/zod-openapi'
import { conversionHandler, metadataHandler, validationHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', validationHandler)
  .route('/', conversionHandler)
  .route('/', metadataHandler)

export default app
