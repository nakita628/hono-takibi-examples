import type { RouteHandler } from '@hono/zod-openapi'
import type { postUpdateFleetMetadataRoute } from '../routes'

export const postUpdateFleetMetadataRouteHandler: RouteHandler<
  typeof postUpdateFleetMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}
