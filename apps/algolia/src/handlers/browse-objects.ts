import type { RouteHandler } from '@hono/zod-openapi'
import type { getBrowseObjectsRoute } from '../routes'

export const getBrowseObjectsRouteHandler: RouteHandler<typeof getBrowseObjectsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
