import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionRevokeDBSecurityGroupIngressRoute,
  postActionRevokeDBSecurityGroupIngressRoute,
} from '../routes'

export const getActionRevokeDBSecurityGroupIngressRouteHandler: RouteHandler<
  typeof getActionRevokeDBSecurityGroupIngressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRevokeDBSecurityGroupIngressRouteHandler: RouteHandler<
  typeof postActionRevokeDBSecurityGroupIngressRoute
> = async (c) => {
  throw new Error('Not implemented')
}
