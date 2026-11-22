import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV1ExpensesIdUploadRoute } from '../routes'

const app = new OpenAPIHono()

export const expenseHandler = app.openapi(postApiV1ExpensesIdUploadRoute, (c) => {
  throw new Error('Not implemented')
})
