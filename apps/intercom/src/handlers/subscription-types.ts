import type { RouteHandler } from '@hono/zod-openapi'
import type { getSubscriptionTypesRoute, getSubscriptionTypesIdRoute } from '../routes'

export const getSubscriptionTypesRouteHandler: RouteHandler<
  typeof getSubscriptionTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSubscriptionTypesIdRouteHandler: RouteHandler<
  typeof getSubscriptionTypesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
