import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteSpotDatafeedSubscriptionRoute,
  postActionDeleteSpotDatafeedSubscriptionRoute,
} from '../routes'

export const getActionDeleteSpotDatafeedSubscriptionRouteHandler: RouteHandler<
  typeof getActionDeleteSpotDatafeedSubscriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteSpotDatafeedSubscriptionRouteHandler: RouteHandler<
  typeof postActionDeleteSpotDatafeedSubscriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
