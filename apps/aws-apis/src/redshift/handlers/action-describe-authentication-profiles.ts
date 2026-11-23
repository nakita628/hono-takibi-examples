import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeAuthenticationProfilesRoute,
  postActionDescribeAuthenticationProfilesRoute,
} from '../routes'

export const getActionDescribeAuthenticationProfilesRouteHandler: RouteHandler<
  typeof getActionDescribeAuthenticationProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeAuthenticationProfilesRouteHandler: RouteHandler<
  typeof postActionDescribeAuthenticationProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
