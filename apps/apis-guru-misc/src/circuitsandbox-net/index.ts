import { OpenAPIHono } from '@hono/zod-openapi'
import {
  conversationsHandler,
  rtcHandler,
  spacesHandler,
  telephonyHandler,
  usersHandler,
  webhooksHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', conversationsHandler)
  .route('/', rtcHandler)
  .route('/', spacesHandler)
  .route('/', telephonyHandler)
  .route('/', usersHandler)
  .route('/', webhooksHandler)

export default app
