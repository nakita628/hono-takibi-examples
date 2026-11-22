import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountsHandler,
  eventsHandler,
  propertiesHandler,
  segmentsHandler,
  trackHandler,
  usersHandler,
  validationHandler,
  websitesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountsHandler)
  .route('/', eventsHandler)
  .route('/', usersHandler)
  .route('/', propertiesHandler)
  .route('/', segmentsHandler)
  .route('/', trackHandler)
  .route('/', websitesHandler)
  .route('/', validationHandler)

export default app
