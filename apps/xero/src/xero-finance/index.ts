import { OpenAPIHono } from '@hono/zod-openapi'
import {
  bankStatementsPlusHandler,
  cashValidationHandler,
  financialStatementsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', cashValidationHandler)
  .route('/', financialStatementsHandler)
  .route('/', bankStatementsPlusHandler)

export default app
