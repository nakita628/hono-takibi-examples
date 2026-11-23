import type { RouteHandler } from '@hono/zod-openapi'
import type { postResourceScanRoute } from '../routes'

export const postResourceScanRouteHandler: RouteHandler<typeof postResourceScanRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
