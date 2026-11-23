import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionListSubscriptionsRoute, postActionListSubscriptionsRoute } from '../routes'

export const getActionListSubscriptionsRouteHandler: RouteHandler<
  typeof getActionListSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListSubscriptionsRouteHandler: RouteHandler<
  typeof postActionListSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
