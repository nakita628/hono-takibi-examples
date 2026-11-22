import { OpenAPIHono } from '@hono/zod-openapi'
import {
  channelsEngagementHandler,
  messagesEngagementHandler,
  statisticsHandler,
  usersEngagementHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', statisticsHandler)
  .route('/', usersEngagementHandler)
  .route('/', messagesEngagementHandler)
  .route('/', channelsEngagementHandler)

export default app
