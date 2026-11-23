import type { RouteHandler } from '@hono/zod-openapi'
import type { getRemoveCurationTagRoute } from '../routes'

export const getRemoveCurationTagRouteHandler: RouteHandler<
  typeof getRemoveCurationTagRoute
> = async (c) => {
  throw new Error('Not implemented')
}
