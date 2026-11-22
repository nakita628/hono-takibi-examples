import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1RecurringExpensesIdRoute,
  getApiV1RecurringExpensesCreateRoute,
  getApiV1RecurringExpensesIdEditRoute,
  getApiV1RecurringExpensesIdRoute,
  getApiV1RecurringExpensesRoute,
  postApiV1RecurringExpensesBulkRoute,
  postApiV1RecurringExpensesRoute,
  putApiV1RecurringExpensesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const recurringExpensesHandler = app
  .openapi(getApiV1RecurringExpensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RecurringExpensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RecurringExpensesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1RecurringExpensesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1RecurringExpensesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RecurringExpensesIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RecurringExpensesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RecurringExpensesBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
