import { OpenAPIHono } from '@hono/zod-openapi'
import { getOrderFinancialStatusListJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const orderFinancialStatusListJsonHandler = app.openapi(
  getOrderFinancialStatusListJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
