import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postPortfolioConstructionInvestableRoute,
  postPortfolioConstructionMimickingRoute,
  postPortfolioConstructionRandomRoute,
} from '../routes'

const app = new OpenAPIHono()

export const portfolioConstructionHandler = app
  .openapi(postPortfolioConstructionInvestableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioConstructionMimickingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioConstructionRandomRoute, (c) => {
    throw new Error('Not implemented')
  })
