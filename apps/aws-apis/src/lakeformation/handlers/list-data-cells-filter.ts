import type { RouteHandler } from '@hono/zod-openapi'
import type { postListDataCellsFilterRoute } from '../routes'

export const postListDataCellsFilterRouteHandler: RouteHandler<
  typeof postListDataCellsFilterRoute
> = async (c) => {
  throw new Error('Not implemented')
}
