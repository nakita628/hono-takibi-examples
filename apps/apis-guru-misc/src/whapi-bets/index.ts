import { OpenAPIHono } from '@hono/zod-openapi'
import {
  betHandler,
  betIdHandler,
  betslipsHandler,
  freebetsHandler,
  historyHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', betHandler)
  .route('/', betslipsHandler)
  .route('/', freebetsHandler)
  .route('/', historyHandler)
  .route('/', betIdHandler)

export default app
