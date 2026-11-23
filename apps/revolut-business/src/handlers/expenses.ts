import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getExpensesExpenseIdReceiptsReceiptIdContentRoute,
  getExpensesExpenseIdRoute,
  getExpensesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const expensesHandler = app
  .openapi(getExpensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExpensesExpenseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExpensesExpenseIdReceiptsReceiptIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
