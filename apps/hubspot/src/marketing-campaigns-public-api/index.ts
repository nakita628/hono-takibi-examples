import { OpenAPIHono } from '@hono/zod-openapi'
import {
  advancedHandler,
  assetsHandler,
  basicHandler,
  batchHandler,
  budgetHandler,
  reportsHandler,
  spendHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', basicHandler)
  .route('/', assetsHandler)
  .route('/', batchHandler)
  .route('/', advancedHandler)
  .route('/', budgetHandler)
  .route('/', reportsHandler)
  .route('/', spendHandler)

export default app
