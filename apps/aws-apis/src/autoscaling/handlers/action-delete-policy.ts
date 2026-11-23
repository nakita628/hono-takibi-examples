import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeletePolicyRoute, postActionDeletePolicyRoute } from '../routes'

export const getActionDeletePolicyRouteHandler: RouteHandler<
  typeof getActionDeletePolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeletePolicyRouteHandler: RouteHandler<
  typeof postActionDeletePolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
