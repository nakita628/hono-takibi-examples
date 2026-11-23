import type { RouteHandler } from '@hono/zod-openapi'
import type { getV3MediaFileIdRoute } from '../routes'

export const getV3MediaFileIdRouteHandler: RouteHandler<typeof getV3MediaFileIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
