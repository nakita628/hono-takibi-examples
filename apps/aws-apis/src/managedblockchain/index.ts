import { OpenAPIHono } from '@hono/zod-openapi'
import { accessorsHandler, invitationsHandler, networksHandler, tagsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accessorsHandler)
  .route('/', networksHandler)
  .route('/', invitationsHandler)
  .route('/', tagsHandler)

export default app
