import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteClientVpnEndpointRoute,
  postActionDeleteClientVpnEndpointRoute,
} from '../routes'

export const getActionDeleteClientVpnEndpointRouteHandler: RouteHandler<
  typeof getActionDeleteClientVpnEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteClientVpnEndpointRouteHandler: RouteHandler<
  typeof postActionDeleteClientVpnEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}
