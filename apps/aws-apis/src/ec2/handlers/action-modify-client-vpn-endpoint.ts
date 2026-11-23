import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyClientVpnEndpointRoute,
  postActionModifyClientVpnEndpointRoute,
} from '../routes'

export const getActionModifyClientVpnEndpointRouteHandler: RouteHandler<
  typeof getActionModifyClientVpnEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyClientVpnEndpointRouteHandler: RouteHandler<
  typeof postActionModifyClientVpnEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}
