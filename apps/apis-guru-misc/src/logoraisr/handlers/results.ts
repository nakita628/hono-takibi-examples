import type { RouteHandler } from '@hono/zod-openapi'
import type { getResultsResultFileIdIndexRoute } from '../routes'

export const getResultsResultFileIdIndexRouteHandler: RouteHandler<
  typeof getResultsResultFileIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
