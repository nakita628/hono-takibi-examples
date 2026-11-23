import { OpenAPIHono } from '@hono/zod-openapi'
import { getBalanceSheetConsolidatedRoute, getBalanceSheetRoute } from '../routes'

const app = new OpenAPIHono()

export const balanceSheetHandler = app
  .openapi(getBalanceSheetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBalanceSheetConsolidatedRoute, (c) => {
    throw new Error('Not implemented')
  })
