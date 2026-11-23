import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionExecutePolicyRoute, postActionExecutePolicyRoute } from '../routes'

export const getActionExecutePolicyRouteHandler: RouteHandler<
  typeof getActionExecutePolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionExecutePolicyRouteHandler: RouteHandler<
  typeof postActionExecutePolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
