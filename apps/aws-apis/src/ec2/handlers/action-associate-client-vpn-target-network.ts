import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionAssociateClientVpnTargetNetworkRoute,
  postActionAssociateClientVpnTargetNetworkRoute,
} from '../routes'

export const getActionAssociateClientVpnTargetNetworkRouteHandler: RouteHandler<
  typeof getActionAssociateClientVpnTargetNetworkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAssociateClientVpnTargetNetworkRouteHandler: RouteHandler<
  typeof postActionAssociateClientVpnTargetNetworkRoute
> = async (c) => {
  throw new Error('Not implemented')
}
