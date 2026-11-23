import type { RouteHandler } from '@hono/zod-openapi'
import type { postUpdateAlertRoute } from '../routes'

export const postUpdateAlertRouteHandler: RouteHandler<typeof postUpdateAlertRoute> = async (c) => {
  throw new Error('Not implemented')
}
