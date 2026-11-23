import { OpenAPIHono } from '@hono/zod-openapi'
import { adminHandler, detectorHandler, invitationHandler, tagsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', detectorHandler)
  .route('/', invitationHandler)
  .route('/', adminHandler)
  .route('/', tagsHandler)

export default app
