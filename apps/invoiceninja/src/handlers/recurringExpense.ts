import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV1RecurringExpensesIdUploadRoute } from '../routes'

const app = new OpenAPIHono()

export const recurringExpenseHandler = app.openapi(postApiV1RecurringExpensesIdUploadRoute, (c) => {
  throw new Error('Not implemented')
})
