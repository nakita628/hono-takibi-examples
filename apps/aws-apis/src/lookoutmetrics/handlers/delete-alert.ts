import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeleteAlertRoute } from '../routes'

export const postDeleteAlertRouteHandler: RouteHandler<typeof postDeleteAlertRoute> = async (c) => {
  throw new Error('Not implemented')
}
