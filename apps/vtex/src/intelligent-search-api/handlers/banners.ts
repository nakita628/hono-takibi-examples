import type { RouteHandler } from '@hono/zod-openapi'
import type { getBannersFacetsRoute } from '../routes'

export const getBannersFacetsRouteHandler: RouteHandler<typeof getBannersFacetsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
