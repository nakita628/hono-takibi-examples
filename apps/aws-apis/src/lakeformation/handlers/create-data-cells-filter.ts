import type { RouteHandler } from '@hono/zod-openapi'
import type { postCreateDataCellsFilterRoute } from '../routes'

export const postCreateDataCellsFilterRouteHandler: RouteHandler<
  typeof postCreateDataCellsFilterRoute
> = async (c) => {
  throw new Error('Not implemented')
}
