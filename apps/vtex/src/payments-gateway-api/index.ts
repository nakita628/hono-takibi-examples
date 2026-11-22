import { OpenAPIHono } from '@hono/zod-openapi'
import {
  configurationHandler,
  installmentsHandler,
  transactionFlowHandler,
  transactionProcessHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', transactionProcessHandler)
  .route('/', configurationHandler)
  .route('/', installmentsHandler)
  .route('/', transactionFlowHandler)

export default app
