import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionAuthorizeClientVpnIngressRoute,
  postActionAuthorizeClientVpnIngressRoute,
} from '../routes'

export const getActionAuthorizeClientVpnIngressRouteHandler: RouteHandler<
  typeof getActionAuthorizeClientVpnIngressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAuthorizeClientVpnIngressRouteHandler: RouteHandler<
  typeof postActionAuthorizeClientVpnIngressRoute
> = async (c) => {
  throw new Error('Not implemented')
}
