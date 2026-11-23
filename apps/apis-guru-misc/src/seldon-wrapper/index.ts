import { OpenAPIHono } from '@hono/zod-openapi'
import {
  aggregateHandler,
  predictHandler,
  routeHandler,
  sendFeedbackHandler,
  transformInputHandler,
  transformOutputHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', aggregateHandler)
  .route('/', predictHandler)
  .route('/', routeHandler)
  .route('/', sendFeedbackHandler)
  .route('/', transformInputHandler)
  .route('/', transformOutputHandler)

export default app
