import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionRevokeSecurityGroupIngressRoute,
  postActionRevokeSecurityGroupIngressRoute,
} from '../routes'

export const getActionRevokeSecurityGroupIngressRouteHandler: RouteHandler<
  typeof getActionRevokeSecurityGroupIngressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRevokeSecurityGroupIngressRouteHandler: RouteHandler<
  typeof postActionRevokeSecurityGroupIngressRoute
> = async (c) => {
  throw new Error('Not implemented')
}
