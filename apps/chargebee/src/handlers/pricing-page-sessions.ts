import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postPricingPageSessionsCreateForExistingSubscriptionRoute,
  postPricingPageSessionsCreateForNewSubscriptionRoute,
} from '../routes'

export const postPricingPageSessionsCreateForExistingSubscriptionRouteHandler: RouteHandler<
  typeof postPricingPageSessionsCreateForExistingSubscriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPricingPageSessionsCreateForNewSubscriptionRouteHandler: RouteHandler<
  typeof postPricingPageSessionsCreateForNewSubscriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
