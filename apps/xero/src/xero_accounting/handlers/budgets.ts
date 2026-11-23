import { OpenAPIHono } from '@hono/zod-openapi'
import { getBudgetsBudgetIDRoute, getBudgetsRoute } from '../routes'

const app = new OpenAPIHono()

export const budgetsHandler = app
  .openapi(getBudgetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBudgetsBudgetIDRoute, (c) => {
    throw new Error('Not implemented')
  })
