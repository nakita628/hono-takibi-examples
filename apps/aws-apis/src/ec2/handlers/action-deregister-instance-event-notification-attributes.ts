import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeregisterInstanceEventNotificationAttributesRoute,
  postActionDeregisterInstanceEventNotificationAttributesRoute,
} from '../routes'

export const getActionDeregisterInstanceEventNotificationAttributesRouteHandler: RouteHandler<
  typeof getActionDeregisterInstanceEventNotificationAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeregisterInstanceEventNotificationAttributesRouteHandler: RouteHandler<
  typeof postActionDeregisterInstanceEventNotificationAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
