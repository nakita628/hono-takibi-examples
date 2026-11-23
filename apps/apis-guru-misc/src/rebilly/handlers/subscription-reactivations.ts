import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSubscriptionReactivationsIdRoute,
  getSubscriptionReactivationsRoute,
  postSubscriptionReactivationsRoute,
} from '../routes'

export const getSubscriptionReactivationsRouteHandler: RouteHandler<
  typeof getSubscriptionReactivationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSubscriptionReactivationsRouteHandler: RouteHandler<
  typeof postSubscriptionReactivationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSubscriptionReactivationsIdRouteHandler: RouteHandler<
  typeof getSubscriptionReactivationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
