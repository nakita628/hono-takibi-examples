import type { RouteHandler } from '@hono/zod-openapi'
import type { postNotificationsRegisterRoute } from '../routes'

export const postNotificationsRegisterRouteHandler: RouteHandler<
  typeof postNotificationsRegisterRoute
> = async (c) => {
  throw new Error('Not implemented')
}
