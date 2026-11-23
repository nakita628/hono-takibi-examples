import type { RouteHandler } from '@hono/zod-openapi'
import type { getCharityCampaignsRoute, getCharityDonationsRoute } from '../routes'

export const getCharityCampaignsRouteHandler: RouteHandler<
  typeof getCharityCampaignsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCharityDonationsRouteHandler: RouteHandler<
  typeof getCharityDonationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
