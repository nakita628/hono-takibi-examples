import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionApplySecurityGroupsToClientVpnTargetNetworkRoute,
  postActionApplySecurityGroupsToClientVpnTargetNetworkRoute,
} from '../routes'

export const getActionApplySecurityGroupsToClientVpnTargetNetworkRouteHandler: RouteHandler<
  typeof getActionApplySecurityGroupsToClientVpnTargetNetworkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionApplySecurityGroupsToClientVpnTargetNetworkRouteHandler: RouteHandler<
  typeof postActionApplySecurityGroupsToClientVpnTargetNetworkRoute
> = async (c) => {
  throw new Error('Not implemented')
}
