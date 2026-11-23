import { OpenAPIHono } from '@hono/zod-openapi'
import {
  boxHandler,
  businessGroupsHandler,
  hubHandler,
  menusHandler,
  profileHandler,
  registrationHandler,
  sessionHandler,
  spacesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', boxHandler)
  .route('/', businessGroupsHandler)
  .route('/', hubHandler)
  .route('/', menusHandler)
  .route('/', profileHandler)
  .route('/', registrationHandler)
  .route('/', sessionHandler)
  .route('/', spacesHandler)

export default app
