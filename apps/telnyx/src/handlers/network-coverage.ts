import type { RouteHandler } from '@hono/zod-openapi'
import type { getNetworkCoverageRoute } from '../routes'

export const getNetworkCoverageRouteHandler: RouteHandler<typeof getNetworkCoverageRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
