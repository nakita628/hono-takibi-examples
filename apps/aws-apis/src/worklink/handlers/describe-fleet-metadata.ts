import type { RouteHandler } from '@hono/zod-openapi'
import type { postDescribeFleetMetadataRoute } from '../routes'

export const postDescribeFleetMetadataRouteHandler: RouteHandler<
  typeof postDescribeFleetMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}
