import { OpenAPIHono } from '@hono/zod-openapi'
import {
  configHandler,
  discordHandler,
  slackHandler,
  snsHandler,
  topicHandler,
  twilioHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', configHandler)
  .route('/', discordHandler)
  .route('/', slackHandler)
  .route('/', snsHandler)
  .route('/', topicHandler)
  .route('/', twilioHandler)

export default app
