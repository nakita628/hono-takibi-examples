import { OpenAPIHono } from '@hono/zod-openapi'
import { getBudgetsBudgetIdMonthsMonthRoute, getBudgetsBudgetIdMonthsRoute } from '../routes'

const app = new OpenAPIHono()

export const monthsHandler = app
  .openapi(getBudgetsBudgetIdMonthsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBudgetsBudgetIdMonthsMonthRoute, (c) => {
    throw new Error('Not implemented')
  })
