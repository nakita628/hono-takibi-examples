import { OpenAPIHono } from '@hono/zod-openapi'
import { managedShortLinksHandler, shortLinksHandler, v1Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', v1Handler)
  .route('/', managedShortLinksHandler)
  .route('/', shortLinksHandler)

export default app
