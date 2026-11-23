import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionAuthorizeCacheSecurityGroupIngressRoute,
  postActionAuthorizeCacheSecurityGroupIngressRoute,
} from '../routes'

export const getActionAuthorizeCacheSecurityGroupIngressRouteHandler: RouteHandler<
  typeof getActionAuthorizeCacheSecurityGroupIngressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAuthorizeCacheSecurityGroupIngressRouteHandler: RouteHandler<
  typeof postActionAuthorizeCacheSecurityGroupIngressRoute
> = async (c) => {
  throw new Error('Not implemented')
}
