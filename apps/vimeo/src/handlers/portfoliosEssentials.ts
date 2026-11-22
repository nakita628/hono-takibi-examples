import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMePortfoliosPortfolioIdRoute,
  getMePortfoliosRoute,
  getUsersUserIdPortfoliosPortfolioIdRoute,
  getUsersUserIdPortfoliosRoute,
} from '../routes'

const app = new OpenAPIHono()

export const portfoliosEssentialsHandler = app
  .openapi(getMePortfoliosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePortfoliosPortfolioIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPortfoliosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPortfoliosPortfolioIdRoute, (c) => {
    throw new Error('Not implemented')
  })
