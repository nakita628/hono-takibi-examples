import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCopyImageRoute, postActionCopyImageRoute } from '../routes'

export const getActionCopyImageRouteHandler: RouteHandler<typeof getActionCopyImageRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postActionCopyImageRouteHandler: RouteHandler<
  typeof postActionCopyImageRoute
> = async (c) => {
  throw new Error('Not implemented')
}
