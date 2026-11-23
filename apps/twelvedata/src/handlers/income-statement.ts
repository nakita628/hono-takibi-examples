import { OpenAPIHono } from '@hono/zod-openapi'
import { getIncomeStatementConsolidatedRoute, getIncomeStatementRoute } from '../routes'

const app = new OpenAPIHono()

export const incomeStatementHandler = app
  .openapi(getIncomeStatementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIncomeStatementConsolidatedRoute, (c) => {
    throw new Error('Not implemented')
  })
