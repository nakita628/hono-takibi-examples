import type { RouteHandler } from '@hono/zod-openapi'
import type { getThumbnailsSatelliteAreaRoute } from '../routes'

export const getThumbnailsSatelliteAreaRouteHandler: RouteHandler<
  typeof getThumbnailsSatelliteAreaRoute
> = async (c) => {
  throw new Error('Not implemented')
}
