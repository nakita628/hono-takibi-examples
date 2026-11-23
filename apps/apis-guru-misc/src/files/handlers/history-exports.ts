import type { RouteHandler } from '@hono/zod-openapi'
import type { getHistoryExportsIdRoute, postHistoryExportsRoute } from '../routes'

export const postHistoryExportsRouteHandler: RouteHandler<typeof postHistoryExportsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getHistoryExportsIdRouteHandler: RouteHandler<
  typeof getHistoryExportsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
