import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1ExpensesIdRoute,
  getApiV1ExpensesCreateRoute,
  getApiV1ExpensesIdEditRoute,
  getApiV1ExpensesIdRoute,
  getApiV1ExpensesRoute,
  postApiV1ExpensesBulkRoute,
  postApiV1ExpensesRoute,
  putApiV1ExpensesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const expensesHandler = app
  .openapi(getApiV1ExpensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ExpensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ExpensesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ExpensesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ExpensesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ExpensesIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ExpensesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ExpensesBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
