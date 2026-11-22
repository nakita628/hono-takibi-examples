import { OpenAPIHono } from '@hono/zod-openapi'
import { getBudgetsBudgetIdPayeesPayeeIdRoute, getBudgetsBudgetIdPayeesRoute } from '../routes'

const app = new OpenAPIHono()

export const payeesHandler = app
  .openapi(getBudgetsBudgetIdPayeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBudgetsBudgetIdPayeesPayeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
