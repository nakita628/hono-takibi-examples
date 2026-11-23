import { OpenAPIHono } from '@hono/zod-openapi'
import {
  groupHandler,
  monitorHandler,
  orgHandler,
  orgsHandler,
  reportingHandler,
  testHandler,
  userHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', groupHandler)
  .route('/', monitorHandler)
  .route('/', orgHandler)
  .route('/', orgsHandler)
  .route('/', reportingHandler)
  .route('/', testHandler)
  .route('/', userHandler)

export default app
