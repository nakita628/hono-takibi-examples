import type { RouteHandler } from '@hono/zod-openapi'
import type { getDescribeVcenterClientsRoute } from '../routes'

export const getDescribeVcenterClientsRouteHandler: RouteHandler<
  typeof getDescribeVcenterClientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
