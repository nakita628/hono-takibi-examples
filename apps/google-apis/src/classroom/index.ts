import { OpenAPIHono } from '@hono/zod-openapi'
import {
  coursesHandler,
  invitationsHandler,
  registrationsHandler,
  userProfilesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', coursesHandler)
  .route('/', invitationsHandler)
  .route('/', registrationsHandler)
  .route('/', userProfilesHandler)

export default app
