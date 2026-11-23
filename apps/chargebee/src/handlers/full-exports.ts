import type { RouteHandler } from '@hono/zod-openapi'
import type { getFullExportsStatusRoute } from '../routes'

export const getFullExportsStatusRouteHandler: RouteHandler<
  typeof getFullExportsStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
