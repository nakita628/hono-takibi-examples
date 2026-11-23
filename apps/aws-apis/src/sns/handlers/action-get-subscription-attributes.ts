import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetSubscriptionAttributesRoute,
  postActionGetSubscriptionAttributesRoute,
} from '../routes'

export const getActionGetSubscriptionAttributesRouteHandler: RouteHandler<
  typeof getActionGetSubscriptionAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetSubscriptionAttributesRouteHandler: RouteHandler<
  typeof postActionGetSubscriptionAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
