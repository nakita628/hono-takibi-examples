import { OpenAPIHono } from '@hono/zod-openapi'
import { postApi1ExpenseApplicationsAmountCalculationsRoute } from '../routes'

const app = new OpenAPIHono()

export const expenseApplicationAmountCalculationsHandler = app.openapi(
  postApi1ExpenseApplicationsAmountCalculationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
