import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateEventSubscriptionRoute,
  postActionCreateEventSubscriptionRoute,
} from '../routes'

export const getActionCreateEventSubscriptionRouteHandler: RouteHandler<
  typeof getActionCreateEventSubscriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateEventSubscriptionRouteHandler: RouteHandler<
  typeof postActionCreateEventSubscriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
