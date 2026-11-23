import type { RouteHandler } from '@hono/zod-openapi'
import type { getContentproSearchRoute } from '../routes'

export const getContentproSearchRouteHandler: RouteHandler<
  typeof getContentproSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
