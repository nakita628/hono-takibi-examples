import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2AccountPortfolioHistoryRoute } from '../routes'

const app = new OpenAPIHono()

export const portfolioHistoryHandler = app.openapi(getV2AccountPortfolioHistoryRoute, (c) => {
  throw new Error('Not implemented')
})
