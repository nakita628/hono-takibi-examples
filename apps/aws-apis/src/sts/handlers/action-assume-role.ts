import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionAssumeRoleRoute, postActionAssumeRoleRoute } from '../routes'

export const getActionAssumeRoleRouteHandler: RouteHandler<
  typeof getActionAssumeRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAssumeRoleRouteHandler: RouteHandler<
  typeof postActionAssumeRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}
