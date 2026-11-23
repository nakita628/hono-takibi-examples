import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteDhcpLeasesIpRoute, getDhcpLeasesRoute } from '../routes'

export const getDhcpLeasesRouteHandler: RouteHandler<typeof getDhcpLeasesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDhcpLeasesIpRouteHandler: RouteHandler<typeof deleteDhcpLeasesIpRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
