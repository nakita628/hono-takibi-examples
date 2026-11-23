import type { RouteHandler } from '@hono/zod-openapi'
import type { postCompareStringsRoute } from '../routes'

export const postCompareStringsRouteHandler: RouteHandler<typeof postCompareStringsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
