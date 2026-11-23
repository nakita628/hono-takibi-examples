import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionRegisterInstanceEventNotificationAttributesRoute,
  postActionRegisterInstanceEventNotificationAttributesRoute,
} from '../routes'

export const getActionRegisterInstanceEventNotificationAttributesRouteHandler: RouteHandler<
  typeof getActionRegisterInstanceEventNotificationAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRegisterInstanceEventNotificationAttributesRouteHandler: RouteHandler<
  typeof postActionRegisterInstanceEventNotificationAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
