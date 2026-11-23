import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetDataCellsFilterRoute } from '../routes'

export const postGetDataCellsFilterRouteHandler: RouteHandler<
  typeof postGetDataCellsFilterRoute
> = async (c) => {
  throw new Error('Not implemented')
}
