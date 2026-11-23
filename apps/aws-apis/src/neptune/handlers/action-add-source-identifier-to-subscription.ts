import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionAddSourceIdentifierToSubscriptionRoute,
  postActionAddSourceIdentifierToSubscriptionRoute,
} from '../routes'

export const getActionAddSourceIdentifierToSubscriptionRouteHandler: RouteHandler<
  typeof getActionAddSourceIdentifierToSubscriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAddSourceIdentifierToSubscriptionRouteHandler: RouteHandler<
  typeof postActionAddSourceIdentifierToSubscriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
