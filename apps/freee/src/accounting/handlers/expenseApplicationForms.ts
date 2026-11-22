import { OpenAPIHono } from '@hono/zod-openapi'
import { getApi1ExpenseApplicationsFormRoute, putApi1ExpenseApplicationsFormRoute } from '../routes'

const app = new OpenAPIHono()

export const expenseApplicationFormsHandler = app
  .openapi(getApi1ExpenseApplicationsFormRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1ExpenseApplicationsFormRoute, (c) => {
    throw new Error('Not implemented')
  })
