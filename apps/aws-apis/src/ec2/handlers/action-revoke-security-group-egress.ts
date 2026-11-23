import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionRevokeSecurityGroupEgressRoute,
  postActionRevokeSecurityGroupEgressRoute,
} from '../routes'

export const getActionRevokeSecurityGroupEgressRouteHandler: RouteHandler<
  typeof getActionRevokeSecurityGroupEgressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRevokeSecurityGroupEgressRouteHandler: RouteHandler<
  typeof postActionRevokeSecurityGroupEgressRoute
> = async (c) => {
  throw new Error('Not implemented')
}
