import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteEventsubscriptionsIndexRoute,
  getEventsubscriptionsSubscriptionIdRoute,
  postEventsubscriptionsIndexRoute,
} from '../routes'

export const deleteEventsubscriptionsIndexRouteHandler: RouteHandler<
  typeof deleteEventsubscriptionsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEventsubscriptionsIndexRouteHandler: RouteHandler<
  typeof postEventsubscriptionsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEventsubscriptionsSubscriptionIdRouteHandler: RouteHandler<
  typeof getEventsubscriptionsSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
