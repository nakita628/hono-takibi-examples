import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postPortfolioAbcRoute,
  postPortfolioFileToPortfolioRoute,
  postPortfolioForecastPerformanceRewindRoute,
  postPortfolioRoute,
  postPortfolioXyzRoute,
} from '../routes'

const app = new OpenAPIHono()

export const portfolioHandler = app
  .openapi(postPortfolioRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioAbcRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioFileToPortfolioRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioForecastPerformanceRewindRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioXyzRoute, (c) => {
    throw new Error('Not implemented')
  })
