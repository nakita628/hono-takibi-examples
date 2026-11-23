import { OpenAPIHono } from '@hono/zod-openapi'
import {
  __rootHandler,
  apiHandler,
  batchHandler,
  bucketsHandler,
  contributeJsonHandler,
  heartbeatHandler,
  lbheartbeatHandler,
  versionHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', __rootHandler)
  .route('/', apiHandler)
  .route('/', heartbeatHandler)
  .route('/', lbheartbeatHandler)
  .route('/', versionHandler)
  .route('/', batchHandler)
  .route('/', bucketsHandler)
  .route('/', contributeJsonHandler)

export default app
