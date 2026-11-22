import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2BalancesBalanceIdReportRoute,
  getV2BalancesBalanceIdRoute,
  getV2BalancesBalanceIdTransactionsRoute,
  getV2BalancesPrimaryRoute,
  getV2BalancesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const balancesAPIHandler = app
  .openapi(getV2BalancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BalancesBalanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BalancesPrimaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BalancesBalanceIdReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BalancesBalanceIdTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
