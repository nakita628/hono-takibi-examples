import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionUntagResourceRoute, postActionUntagResourceRoute } from '../routes'

export const getActionUntagResourceRouteHandler: RouteHandler<
  typeof getActionUntagResourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUntagResourceRouteHandler: RouteHandler<
  typeof postActionUntagResourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
