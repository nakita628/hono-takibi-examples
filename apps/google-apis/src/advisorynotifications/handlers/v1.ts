import type { RouteHandler } from '@hono/zod-openapi'
import type { getV1NameRoute, getV1ParentNotificationsRoute } from '../routes'

export const getV1NameRouteHandler: RouteHandler<typeof getV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ParentNotificationsRouteHandler: RouteHandler<
  typeof getV1ParentNotificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
