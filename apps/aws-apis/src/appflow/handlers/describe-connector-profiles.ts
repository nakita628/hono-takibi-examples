import type { RouteHandler } from '@hono/zod-openapi'
import type { postDescribeConnectorProfilesRoute } from '../routes'

export const postDescribeConnectorProfilesRouteHandler: RouteHandler<
  typeof postDescribeConnectorProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
