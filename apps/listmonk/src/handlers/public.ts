import type { RouteHandler } from '@hono/zod-openapi'
import type { getPublicListsRoute, postPublicSubscriptionRoute } from '../routes'

export const getPublicListsRouteHandler: RouteHandler<typeof getPublicListsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPublicSubscriptionRouteHandler: RouteHandler<
  typeof postPublicSubscriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
