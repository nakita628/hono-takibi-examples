import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getStocksFinancialsV1BalanceSheetsRoute,
  getStocksFinancialsV1CashFlowStatementsRoute,
  getStocksFinancialsV1IncomeStatementsRoute,
  getStocksFinancialsV1RatiosRoute,
} from '../routes'

const app = new OpenAPIHono()

export const financialsHandler = app
  .openapi(getStocksFinancialsV1BalanceSheetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStocksFinancialsV1CashFlowStatementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStocksFinancialsV1IncomeStatementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStocksFinancialsV1RatiosRoute, (c) => {
    throw new Error('Not implemented')
  })
