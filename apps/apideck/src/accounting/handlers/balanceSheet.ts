import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountingBalanceSheetRoute } from '../routes'

const app = new OpenAPIHono()

export const balanceSheetHandler = app.openapi(getAccountingBalanceSheetRoute, (c) => {
  throw new Error('Not implemented')
})
