import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionAssumeRoleWithSAMLRoute, postActionAssumeRoleWithSAMLRoute } from '../routes'

export const getActionAssumeRoleWithSAMLRouteHandler: RouteHandler<
  typeof getActionAssumeRoleWithSAMLRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAssumeRoleWithSAMLRouteHandler: RouteHandler<
  typeof postActionAssumeRoleWithSAMLRoute
> = async (c) => {
  throw new Error('Not implemented')
}
