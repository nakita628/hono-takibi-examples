import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteEventSubscriptionRoute,
  postActionDeleteEventSubscriptionRoute,
} from '../routes'

export const getActionDeleteEventSubscriptionRouteHandler: RouteHandler<
  typeof getActionDeleteEventSubscriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteEventSubscriptionRouteHandler: RouteHandler<
  typeof postActionDeleteEventSubscriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
