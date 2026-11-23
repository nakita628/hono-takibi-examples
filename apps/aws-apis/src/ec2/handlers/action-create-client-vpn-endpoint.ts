import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateClientVpnEndpointRoute,
  postActionCreateClientVpnEndpointRoute,
} from '../routes'

export const getActionCreateClientVpnEndpointRouteHandler: RouteHandler<
  typeof getActionCreateClientVpnEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateClientVpnEndpointRouteHandler: RouteHandler<
  typeof postActionCreateClientVpnEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}
