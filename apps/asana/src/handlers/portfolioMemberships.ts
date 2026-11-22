import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPortfolioMembershipsPortfolioMembershipGidRoute,
  getPortfolioMembershipsRoute,
  getPortfoliosPortfolioGidPortfolioMembershipsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const portfolioMembershipsHandler = app
  .openapi(getPortfolioMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortfolioMembershipsPortfolioMembershipGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortfoliosPortfolioGidPortfolioMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
