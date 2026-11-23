import type { RouteHandler } from '@hono/zod-openapi'
import type { getCacertificatesRoute } from '../routes'

export const getCacertificatesRouteHandler: RouteHandler<typeof getCacertificatesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
