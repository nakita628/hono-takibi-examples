import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionRevokeCacheSecurityGroupIngressRoute,
  postActionRevokeCacheSecurityGroupIngressRoute,
} from '../routes'

export const getActionRevokeCacheSecurityGroupIngressRouteHandler: RouteHandler<
  typeof getActionRevokeCacheSecurityGroupIngressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRevokeCacheSecurityGroupIngressRouteHandler: RouteHandler<
  typeof postActionRevokeCacheSecurityGroupIngressRoute
> = async (c) => {
  throw new Error('Not implemented')
}
