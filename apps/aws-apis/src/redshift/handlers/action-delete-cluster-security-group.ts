import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteClusterSecurityGroupRoute,
  postActionDeleteClusterSecurityGroupRoute,
} from '../routes'

export const getActionDeleteClusterSecurityGroupRouteHandler: RouteHandler<
  typeof getActionDeleteClusterSecurityGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteClusterSecurityGroupRouteHandler: RouteHandler<
  typeof postActionDeleteClusterSecurityGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
