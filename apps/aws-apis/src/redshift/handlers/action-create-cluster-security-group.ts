import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateClusterSecurityGroupRoute,
  postActionCreateClusterSecurityGroupRoute,
} from '../routes'

export const getActionCreateClusterSecurityGroupRouteHandler: RouteHandler<
  typeof getActionCreateClusterSecurityGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateClusterSecurityGroupRouteHandler: RouteHandler<
  typeof postActionCreateClusterSecurityGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
