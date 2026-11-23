import type { RouteHandler } from '@hono/zod-openapi'
import type { postSendOfferToInterestedBuyersRoute } from '../routes'

export const postSendOfferToInterestedBuyersRouteHandler: RouteHandler<
  typeof postSendOfferToInterestedBuyersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
