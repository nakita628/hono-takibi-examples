import type { RouteHandler } from '@hono/zod-openapi'
import type { postTrackRoute } from '../routes'

export const postTrackRouteHandler: RouteHandler<typeof postTrackRoute> = async (c) => {
  throw new Error('Not implemented')
}
