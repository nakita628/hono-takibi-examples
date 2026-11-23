import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeleteDataCellsFilterRoute } from '../routes'

export const postDeleteDataCellsFilterRouteHandler: RouteHandler<
  typeof postDeleteDataCellsFilterRoute
> = async (c) => {
  throw new Error('Not implemented')
}
