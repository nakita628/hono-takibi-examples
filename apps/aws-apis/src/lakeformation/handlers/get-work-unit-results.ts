import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetWorkUnitResultsRoute } from '../routes'

export const postGetWorkUnitResultsRouteHandler: RouteHandler<
  typeof postGetWorkUnitResultsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
