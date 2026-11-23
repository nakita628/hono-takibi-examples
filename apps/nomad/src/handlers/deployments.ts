import type { RouteHandler } from '@hono/zod-openapi'
import type { getDeploymentsRoute } from '../routes'

export const getDeploymentsRouteHandler: RouteHandler<typeof getDeploymentsRoute> = async (c) => {
  throw new Error('Not implemented')
}
