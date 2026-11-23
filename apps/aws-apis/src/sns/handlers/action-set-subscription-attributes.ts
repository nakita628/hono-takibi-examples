import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionSetSubscriptionAttributesRoute,
  postActionSetSubscriptionAttributesRoute,
} from '../routes'

export const getActionSetSubscriptionAttributesRouteHandler: RouteHandler<
  typeof getActionSetSubscriptionAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionSetSubscriptionAttributesRouteHandler: RouteHandler<
  typeof postActionSetSubscriptionAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
