import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionListSubscriptionsByTopicRoute,
  postActionListSubscriptionsByTopicRoute,
} from '../routes'

export const getActionListSubscriptionsByTopicRouteHandler: RouteHandler<
  typeof getActionListSubscriptionsByTopicRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListSubscriptionsByTopicRouteHandler: RouteHandler<
  typeof postActionListSubscriptionsByTopicRoute
> = async (c) => {
  throw new Error('Not implemented')
}
