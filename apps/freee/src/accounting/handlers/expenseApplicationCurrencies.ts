import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApi1ExpenseApplicationsCurrenciesIdRoute,
  getApi1ExpenseApplicationsCurrenciesIdRoute,
  getApi1ExpenseApplicationsCurrenciesRoute,
  postApi1ExpenseApplicationsCurrenciesRoute,
  putApi1ExpenseApplicationsCurrenciesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const expenseApplicationCurrenciesHandler = app
  .openapi(getApi1ExpenseApplicationsCurrenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1ExpenseApplicationsCurrenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ExpenseApplicationsCurrenciesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1ExpenseApplicationsCurrenciesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApi1ExpenseApplicationsCurrenciesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
