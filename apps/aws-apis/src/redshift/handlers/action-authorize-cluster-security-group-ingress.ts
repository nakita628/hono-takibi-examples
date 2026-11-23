import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionAuthorizeClusterSecurityGroupIngressRoute,
  postActionAuthorizeClusterSecurityGroupIngressRoute,
} from '../routes'

export const getActionAuthorizeClusterSecurityGroupIngressRouteHandler: RouteHandler<
  typeof getActionAuthorizeClusterSecurityGroupIngressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAuthorizeClusterSecurityGroupIngressRouteHandler: RouteHandler<
  typeof postActionAuthorizeClusterSecurityGroupIngressRoute
> = async (c) => {
  throw new Error('Not implemented')
}
