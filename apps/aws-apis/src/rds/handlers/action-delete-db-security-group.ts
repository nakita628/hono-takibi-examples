import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteDBSecurityGroupRoute,
  postActionDeleteDBSecurityGroupRoute,
} from '../routes'

export const getActionDeleteDBSecurityGroupRouteHandler: RouteHandler<
  typeof getActionDeleteDBSecurityGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteDBSecurityGroupRouteHandler: RouteHandler<
  typeof postActionDeleteDBSecurityGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
