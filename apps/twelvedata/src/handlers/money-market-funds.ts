import { OpenAPIHono } from '@hono/zod-openapi'
import { getMoneyMarketFundsListRoute, getMoneyMarketFundsWorldRoute } from '../routes'

const app = new OpenAPIHono()

export const moneyMarketFundsHandler = app
  .openapi(getMoneyMarketFundsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMoneyMarketFundsWorldRoute, (c) => {
    throw new Error('Not implemented')
  })
