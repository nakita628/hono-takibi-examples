import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreatePolicyRoute, postActionCreatePolicyRoute } from '../routes'

export const getActionCreatePolicyRouteHandler: RouteHandler<
  typeof getActionCreatePolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreatePolicyRouteHandler: RouteHandler<
  typeof postActionCreatePolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
