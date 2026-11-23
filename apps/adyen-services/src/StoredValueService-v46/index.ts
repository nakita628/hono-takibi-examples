import { OpenAPIHono } from '@hono/zod-openapi'
import {
  changeStatusHandler,
  checkBalanceHandler,
  issueHandler,
  loadHandler,
  mergeBalanceHandler,
  voidTransactionHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', changeStatusHandler)
  .route('/', checkBalanceHandler)
  .route('/', issueHandler)
  .route('/', loadHandler)
  .route('/', mergeBalanceHandler)
  .route('/', voidTransactionHandler)

export default app
