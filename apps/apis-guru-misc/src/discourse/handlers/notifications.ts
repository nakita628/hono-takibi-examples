import type { RouteHandler } from '@hono/zod-openapi'
import type { putNotificationsMarkReadJsonRoute } from '../routes'

export const putNotificationsMarkReadJsonRouteHandler: RouteHandler<
  typeof putNotificationsMarkReadJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
