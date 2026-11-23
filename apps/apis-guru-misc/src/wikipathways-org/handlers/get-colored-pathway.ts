import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetColoredPathwayRoute } from '../routes'

export const getGetColoredPathwayRouteHandler: RouteHandler<
  typeof getGetColoredPathwayRoute
> = async (c) => {
  throw new Error('Not implemented')
}
