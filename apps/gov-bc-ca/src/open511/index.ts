import { OpenAPIHono } from '@hono/zod-openapi'
import {
  areasHandler,
  eventsHandler,
  jurisdictiongeographyHandler,
  jurisdictionHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', areasHandler)
  .route('/', eventsHandler)
  .route('/', jurisdictionHandler)
  .route('/', jurisdictiongeographyHandler)

export default app
