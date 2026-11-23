import type { RouteHandler } from '@hono/zod-openapi'
import type { getEnterpriseHubsRoute } from '../routes'

export const getEnterpriseHubsRouteHandler: RouteHandler<typeof getEnterpriseHubsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
