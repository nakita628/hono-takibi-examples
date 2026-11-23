import type { RouteHandler } from '@hono/zod-openapi'
import type { getNearestPlaceRoute } from '../routes'

export const getNearestPlaceRouteHandler: RouteHandler<typeof getNearestPlaceRoute> = async (c) => {
  throw new Error('Not implemented')
}
