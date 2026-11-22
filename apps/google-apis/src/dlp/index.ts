import { OpenAPIHono } from '@hono/zod-openapi'
import { infoTypesHandler, locationsHandler, projectsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', infoTypesHandler)
  .route('/', projectsHandler)
  .route('/', locationsHandler)

export default app
