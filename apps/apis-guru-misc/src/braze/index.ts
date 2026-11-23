import { OpenAPIHono } from '@hono/zod-openapi'
import {
  campaignsHandler,
  canvasHandler,
  contentBlocksHandler,
  emailHandler,
  eventsHandler,
  feedHandler,
  kpiHandler,
  messagesHandler,
  segmentsHandler,
  sendsHandler,
  sessionsHandler,
  subscriptionHandler,
  templatesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', campaignsHandler)
  .route('/', canvasHandler)
  .route('/', contentBlocksHandler)
  .route('/', emailHandler)
  .route('/', eventsHandler)
  .route('/', feedHandler)
  .route('/', kpiHandler)
  .route('/', messagesHandler)
  .route('/', segmentsHandler)
  .route('/', sendsHandler)
  .route('/', sessionsHandler)
  .route('/', subscriptionHandler)
  .route('/', templatesHandler)

export default app
