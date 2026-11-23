import type { RouteHandler } from '@hono/zod-openapi'
import type { getNearbyRoute } from '../routes'

export const getNearbyRouteHandler: RouteHandler<typeof getNearbyRoute> = async (c) => {
  throw new Error('Not implemented')
}
