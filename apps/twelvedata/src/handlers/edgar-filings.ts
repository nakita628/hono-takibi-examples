import type { RouteHandler } from '@hono/zod-openapi'
import type { getEdgarFilingsArchiveRoute } from '../routes'

export const getEdgarFilingsArchiveRouteHandler: RouteHandler<
  typeof getEdgarFilingsArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}
