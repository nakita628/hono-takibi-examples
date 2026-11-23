import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetIdentityNotificationAttributesRoute,
  postActionGetIdentityNotificationAttributesRoute,
} from '../routes'

export const getActionGetIdentityNotificationAttributesRouteHandler: RouteHandler<
  typeof getActionGetIdentityNotificationAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetIdentityNotificationAttributesRouteHandler: RouteHandler<
  typeof postActionGetIdentityNotificationAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
