import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionUntagUserRoute, postActionUntagUserRoute } from '../routes'

export const getActionUntagUserRouteHandler: RouteHandler<typeof getActionUntagUserRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postActionUntagUserRouteHandler: RouteHandler<
  typeof postActionUntagUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}
