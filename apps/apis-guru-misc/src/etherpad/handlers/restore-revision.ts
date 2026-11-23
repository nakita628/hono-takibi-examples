import type { RouteHandler } from '@hono/zod-openapi'
import type { getRestoreRevisionRoute, postRestoreRevisionRoute } from '../routes'

export const getRestoreRevisionRouteHandler: RouteHandler<typeof getRestoreRevisionRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postRestoreRevisionRouteHandler: RouteHandler<
  typeof postRestoreRevisionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
