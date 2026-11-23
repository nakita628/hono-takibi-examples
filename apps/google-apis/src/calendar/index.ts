import { OpenAPIHono } from '@hono/zod-openapi'
import {
  calendarsHandler,
  channelsHandler,
  colorsHandler,
  freeBusyHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', calendarsHandler)
  .route('/', channelsHandler)
  .route('/', colorsHandler)
  .route('/', freeBusyHandler)
  .route('/', usersHandler)

export default app
