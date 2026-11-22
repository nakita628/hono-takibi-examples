import { OpenAPIHono } from '@hono/zod-openapi'
import {
  cancellationsHandler,
  eventsHandler,
  functionRunsHandler,
  signalsHandler,
  webhooksHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', eventsHandler)
  .route('/', functionRunsHandler)
  .route('/', signalsHandler)
  .route('/', cancellationsHandler)
  .route('/', webhooksHandler)

export default app
