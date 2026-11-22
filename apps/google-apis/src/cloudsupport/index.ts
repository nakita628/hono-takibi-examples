import { OpenAPIHono } from '@hono/zod-openapi'
import { caseClassificationsHandler, casesHandler, mediaHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', caseClassificationsHandler)
  .route('/', casesHandler)
  .route('/', mediaHandler)

export default app
