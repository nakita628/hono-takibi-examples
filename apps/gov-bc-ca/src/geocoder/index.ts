import { OpenAPIHono } from '@hono/zod-openapi'
import { intersectionsHandler, occupantsHandler, parcelsHandler, sitesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', sitesHandler)
  .route('/', intersectionsHandler)
  .route('/', occupantsHandler)
  .route('/', parcelsHandler)

export default app
