import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1TradingAccountsAccountIdAccountPortfolioHistoryRoute } from '../routes'

const app = new OpenAPIHono()

export const portfolioHistoryHandler = app.openapi(
  getV1TradingAccountsAccountIdAccountPortfolioHistoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
