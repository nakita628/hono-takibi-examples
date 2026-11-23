import type { RouteHandler } from '@hono/zod-openapi'
import type { postListAlertsRoute } from '../routes'

export const postListAlertsRouteHandler: RouteHandler<typeof postListAlertsRoute> = async (c) => {
  throw new Error('Not implemented')
}
