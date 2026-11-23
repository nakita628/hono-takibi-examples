import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateSpotDatafeedSubscriptionRoute,
  postActionCreateSpotDatafeedSubscriptionRoute,
} from '../routes'

export const getActionCreateSpotDatafeedSubscriptionRouteHandler: RouteHandler<
  typeof getActionCreateSpotDatafeedSubscriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateSpotDatafeedSubscriptionRouteHandler: RouteHandler<
  typeof postActionCreateSpotDatafeedSubscriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
