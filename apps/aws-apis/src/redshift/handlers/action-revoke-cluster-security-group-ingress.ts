import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionRevokeClusterSecurityGroupIngressRoute,
  postActionRevokeClusterSecurityGroupIngressRoute,
} from '../routes'

export const getActionRevokeClusterSecurityGroupIngressRouteHandler: RouteHandler<
  typeof getActionRevokeClusterSecurityGroupIngressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRevokeClusterSecurityGroupIngressRouteHandler: RouteHandler<
  typeof postActionRevokeClusterSecurityGroupIngressRoute
> = async (c) => {
  throw new Error('Not implemented')
}
