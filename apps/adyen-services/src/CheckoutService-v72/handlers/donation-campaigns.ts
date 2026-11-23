import type { RouteHandler } from '@hono/zod-openapi'
import type { postDonationCampaignsRoute } from '../routes'

export const postDonationCampaignsRouteHandler: RouteHandler<
  typeof postDonationCampaignsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
