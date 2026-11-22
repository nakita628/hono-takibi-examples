import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountHandler,
  ciscoSNTCHandler,
  exportHandler,
  organizationHandler,
  publicHandler,
  serviceNowHandler,
  splunkHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountHandler)
  .route('/', ciscoSNTCHandler)
  .route('/', exportHandler)
  .route('/', serviceNowHandler)
  .route('/', splunkHandler)
  .route('/', organizationHandler)
  .route('/', publicHandler)

export default app
