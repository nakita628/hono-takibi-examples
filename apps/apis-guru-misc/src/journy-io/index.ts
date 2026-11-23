import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountsHandler,
  eventsHandler,
  linkHandler,
  propertiesHandler,
  segmentsHandler,
  trackHandler,
  trackingHandler,
  usersHandler,
  validateHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountsHandler)
  .route('/', eventsHandler)
  .route('/', linkHandler)
  .route('/', propertiesHandler)
  .route('/', segmentsHandler)
  .route('/', trackHandler)
  .route('/', trackingHandler)
  .route('/', usersHandler)
  .route('/', validateHandler)

export default app
