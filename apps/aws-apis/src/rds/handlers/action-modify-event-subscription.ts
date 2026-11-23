import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyEventSubscriptionRoute,
  postActionModifyEventSubscriptionRoute,
} from '../routes'

export const getActionModifyEventSubscriptionRouteHandler: RouteHandler<
  typeof getActionModifyEventSubscriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyEventSubscriptionRouteHandler: RouteHandler<
  typeof postActionModifyEventSubscriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
