import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionSetIdentityNotificationTopicRoute,
  postActionSetIdentityNotificationTopicRoute,
} from '../routes'

export const getActionSetIdentityNotificationTopicRouteHandler: RouteHandler<
  typeof getActionSetIdentityNotificationTopicRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionSetIdentityNotificationTopicRouteHandler: RouteHandler<
  typeof postActionSetIdentityNotificationTopicRoute
> = async (c) => {
  throw new Error('Not implemented')
}
