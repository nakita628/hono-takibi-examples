import { OpenAPIHono } from '@hono/zod-openapi'
import {
  attendeesSigninsHandler,
  authenticationHandler,
  passwordsHandler,
  teamMembersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', passwordsHandler)
  .route('/', authenticationHandler)
  .route('/', attendeesSigninsHandler)
  .route('/', teamMembersHandler)

export default app
