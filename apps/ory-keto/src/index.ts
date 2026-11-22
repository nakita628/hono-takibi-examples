import { OpenAPIHono } from '@hono/zod-openapi'
import { metadataHandler, permissionHandler, relationshipHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', relationshipHandler)
  .route('/', metadataHandler)
  .route('/', permissionHandler)

export default app
