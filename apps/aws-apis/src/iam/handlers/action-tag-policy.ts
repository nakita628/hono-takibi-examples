import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionTagPolicyRoute, postActionTagPolicyRoute } from '../routes'

export const getActionTagPolicyRouteHandler: RouteHandler<typeof getActionTagPolicyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postActionTagPolicyRouteHandler: RouteHandler<
  typeof postActionTagPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
