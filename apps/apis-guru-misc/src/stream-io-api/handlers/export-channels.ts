import type { RouteHandler } from '@hono/zod-openapi'
import type { getExportChannelsIdRoute, postExportChannelsRoute } from '../routes'

export const postExportChannelsRouteHandler: RouteHandler<typeof postExportChannelsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getExportChannelsIdRouteHandler: RouteHandler<
  typeof getExportChannelsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
