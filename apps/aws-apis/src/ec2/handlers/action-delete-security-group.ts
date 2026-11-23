import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteSecurityGroupRoute,
  postActionDeleteSecurityGroupRoute,
} from '../routes'

export const getActionDeleteSecurityGroupRouteHandler: RouteHandler<
  typeof getActionDeleteSecurityGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteSecurityGroupRouteHandler: RouteHandler<
  typeof postActionDeleteSecurityGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
