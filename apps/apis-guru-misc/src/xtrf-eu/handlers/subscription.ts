import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSubscriptionSubscriptionIdRoute,
  getSubscriptionRoute,
  getSubscriptionSupportsRoute,
  postSubscriptionRoute,
} from '../routes'

export const getSubscriptionRouteHandler: RouteHandler<typeof getSubscriptionRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSubscriptionRouteHandler: RouteHandler<typeof postSubscriptionRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSubscriptionSupportsRouteHandler: RouteHandler<
  typeof getSubscriptionSupportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSubscriptionSubscriptionIdRouteHandler: RouteHandler<
  typeof deleteSubscriptionSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
