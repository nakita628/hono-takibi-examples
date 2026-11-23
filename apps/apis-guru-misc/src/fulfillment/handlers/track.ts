import type { RouteHandler } from '@hono/zod-openapi'
import type { getTrackRoute } from '../routes'

export const getTrackRouteHandler: RouteHandler<typeof getTrackRoute> = async (c) => {
  throw new Error('Not implemented')
}
