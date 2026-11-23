import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionAuthorizeDBSecurityGroupIngressRoute,
  postActionAuthorizeDBSecurityGroupIngressRoute,
} from '../routes'

export const getActionAuthorizeDBSecurityGroupIngressRouteHandler: RouteHandler<
  typeof getActionAuthorizeDBSecurityGroupIngressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAuthorizeDBSecurityGroupIngressRouteHandler: RouteHandler<
  typeof postActionAuthorizeDBSecurityGroupIngressRoute
> = async (c) => {
  throw new Error('Not implemented')
}
