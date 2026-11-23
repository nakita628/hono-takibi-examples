import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionRevokeClientVpnIngressRoute,
  postActionRevokeClientVpnIngressRoute,
} from '../routes'

export const getActionRevokeClientVpnIngressRouteHandler: RouteHandler<
  typeof getActionRevokeClientVpnIngressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRevokeClientVpnIngressRouteHandler: RouteHandler<
  typeof postActionRevokeClientVpnIngressRoute
> = async (c) => {
  throw new Error('Not implemented')
}
