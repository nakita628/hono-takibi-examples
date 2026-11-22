import { OpenAPIHono } from '@hono/zod-openapi'
import {
  authenticationHandler,
  historyHandler,
  publishingHandler,
  pushHandler,
  statsHandler,
  statusHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', statusHandler)
  .route('/', historyHandler)
  .route('/', publishingHandler)
  .route('/', authenticationHandler)
  .route('/', pushHandler)
  .route('/', statsHandler)

export default app
