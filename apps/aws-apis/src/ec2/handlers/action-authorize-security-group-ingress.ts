import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionAuthorizeSecurityGroupIngressRoute,
  postActionAuthorizeSecurityGroupIngressRoute,
} from '../routes'

export const getActionAuthorizeSecurityGroupIngressRouteHandler: RouteHandler<
  typeof getActionAuthorizeSecurityGroupIngressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAuthorizeSecurityGroupIngressRouteHandler: RouteHandler<
  typeof postActionAuthorizeSecurityGroupIngressRoute
> = async (c) => {
  throw new Error('Not implemented')
}
