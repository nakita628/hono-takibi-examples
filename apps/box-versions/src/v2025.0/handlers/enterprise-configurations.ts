import type { RouteHandler } from '@hono/zod-openapi'
import type { getEnterpriseConfigurationsEnterpriseIdRoute } from '../routes'

export const getEnterpriseConfigurationsEnterpriseIdRouteHandler: RouteHandler<
  typeof getEnterpriseConfigurationsEnterpriseIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
