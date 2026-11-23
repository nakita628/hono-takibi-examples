import type { RouteHandler } from '@hono/zod-openapi'
import type { getRemoteHealthRemoteRoute } from '../routes'

export const getRemoteHealthRemoteRouteHandler: RouteHandler<
  typeof getRemoteHealthRemoteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
