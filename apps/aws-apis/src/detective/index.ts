import { OpenAPIHono } from '@hono/zod-openapi'
import {
  graphHandler,
  graphsHandler,
  invitationHandler,
  invitationsHandler,
  membershipHandler,
  orgsHandler,
  tagsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', invitationHandler)
  .route('/', graphHandler)
  .route('/', membershipHandler)
  .route('/', orgsHandler)
  .route('/', graphsHandler)
  .route('/', invitationsHandler)
  .route('/', tagsHandler)

export default app
