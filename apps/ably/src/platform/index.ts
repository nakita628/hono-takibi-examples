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
  .route('/', historyHandler)
  .route('/', publishingHandler)
  .route('/', statusHandler)
  .route('/', pushHandler)
  .route('/', authenticationHandler)
  .route('/', statsHandler)

export default app
