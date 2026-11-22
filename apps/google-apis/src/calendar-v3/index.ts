import { OpenAPIHono } from '@hono/zod-openapi'
import {
  aclHandler,
  calendarListHandler,
  calendarsHandler,
  channelsHandler,
  colorsHandler,
  eventsHandler,
  freebusyHandler,
  settingsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', calendarsHandler)
  .route('/', aclHandler)
  .route('/', eventsHandler)
  .route('/', channelsHandler)
  .route('/', colorsHandler)
  .route('/', freebusyHandler)
  .route('/', calendarListHandler)
  .route('/', settingsHandler)

export default app
