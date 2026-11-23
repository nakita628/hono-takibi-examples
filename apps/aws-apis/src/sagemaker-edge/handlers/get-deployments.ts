import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetDeploymentsRoute } from '../routes'

export const postGetDeploymentsRouteHandler: RouteHandler<typeof postGetDeploymentsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
