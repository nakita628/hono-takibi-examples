import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetActionableNotificationsRoute } from '../routes'

export const getGetActionableNotificationsRouteHandler: RouteHandler<
  typeof getGetActionableNotificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
