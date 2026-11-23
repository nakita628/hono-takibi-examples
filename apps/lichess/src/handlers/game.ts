import type { RouteHandler } from '@hono/zod-openapi'
import type { getGameExportGameIdRoute } from '../routes'

export const getGameExportGameIdRouteHandler: RouteHandler<
  typeof getGameExportGameIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
