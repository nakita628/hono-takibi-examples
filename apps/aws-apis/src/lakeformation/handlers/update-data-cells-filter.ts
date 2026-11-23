import type { RouteHandler } from '@hono/zod-openapi'
import type { postUpdateDataCellsFilterRoute } from '../routes'

export const postUpdateDataCellsFilterRouteHandler: RouteHandler<
  typeof postUpdateDataCellsFilterRoute
> = async (c) => {
  throw new Error('Not implemented')
}
