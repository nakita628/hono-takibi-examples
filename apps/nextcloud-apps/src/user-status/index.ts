import { OpenAPIHono } from '@hono/zod-openapi'
import {
  heartbeatHandler,
  predefinedStatusHandler,
  statusesHandler,
  userStatusHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', heartbeatHandler)
  .route('/', predefinedStatusHandler)
  .route('/', statusesHandler)
  .route('/', userStatusHandler)

export default app
