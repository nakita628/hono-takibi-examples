import { OpenAPIHono } from '@hono/zod-openapi'
import { ddlHandler, healthHandler, metadataHandler, recordsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', healthHandler)
  .route('/', metadataHandler)
  .route('/', ddlHandler)
  .route('/', recordsHandler)

export default app
