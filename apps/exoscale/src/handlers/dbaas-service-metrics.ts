import type { RouteHandler } from '@hono/zod-openapi'
import type { postDbaasServiceMetricsServiceNameRoute } from '../routes'

export const postDbaasServiceMetricsServiceNameRouteHandler: RouteHandler<
  typeof postDbaasServiceMetricsServiceNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
