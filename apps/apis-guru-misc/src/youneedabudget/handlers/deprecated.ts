import { OpenAPIHono } from '@hono/zod-openapi'
import { postBudgetsBudgetIdTransactionsBulkRoute } from '../routes'

const app = new OpenAPIHono()

export const deprecatedHandler = app.openapi(postBudgetsBudgetIdTransactionsBulkRoute, (c) => {
  throw new Error('Not implemented')
})
