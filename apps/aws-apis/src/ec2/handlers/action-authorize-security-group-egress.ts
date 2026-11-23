import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionAuthorizeSecurityGroupEgressRoute,
  postActionAuthorizeSecurityGroupEgressRoute,
} from '../routes'

export const getActionAuthorizeSecurityGroupEgressRouteHandler: RouteHandler<
  typeof getActionAuthorizeSecurityGroupEgressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAuthorizeSecurityGroupEgressRouteHandler: RouteHandler<
  typeof postActionAuthorizeSecurityGroupEgressRoute
> = async (c) => {
  throw new Error('Not implemented')
}
