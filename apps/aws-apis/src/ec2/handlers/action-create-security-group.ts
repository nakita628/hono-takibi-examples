import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateSecurityGroupRoute,
  postActionCreateSecurityGroupRoute,
} from '../routes'

export const getActionCreateSecurityGroupRouteHandler: RouteHandler<
  typeof getActionCreateSecurityGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateSecurityGroupRouteHandler: RouteHandler<
  typeof postActionCreateSecurityGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
