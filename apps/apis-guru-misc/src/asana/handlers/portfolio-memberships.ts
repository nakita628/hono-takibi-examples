import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPortfolioMembershipsPortfolioMembershipGidRoute,
  getPortfolioMembershipsRoute,
} from '../routes'

export const getPortfolioMembershipsRouteHandler: RouteHandler<
  typeof getPortfolioMembershipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPortfolioMembershipsPortfolioMembershipGidRouteHandler: RouteHandler<
  typeof getPortfolioMembershipsPortfolioMembershipGidRoute
> = async (c) => {
  throw new Error('Not implemented')
}
