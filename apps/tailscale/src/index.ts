import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deviceHandler,
  deviceInvitesHandler,
  organizationsHandler,
  postureHandler,
  tailnetHandler,
  userInvitesHandler,
  usersHandler,
  webhooksHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', tailnetHandler)
  .route('/', deviceHandler)
  .route('/', userInvitesHandler)
  .route('/', deviceInvitesHandler)
  .route('/', postureHandler)
  .route('/', usersHandler)
  .route('/', webhooksHandler)
  .route('/', organizationsHandler)

export default app
