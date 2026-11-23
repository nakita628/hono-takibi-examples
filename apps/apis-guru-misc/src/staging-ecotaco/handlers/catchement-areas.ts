import type { RouteHandler } from '@hono/zod-openapi'
import type { getCatchementAreasIdRoute, getCatchementAreasRoute } from '../routes'

export const getCatchementAreasRouteHandler: RouteHandler<typeof getCatchementAreasRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getCatchementAreasIdRouteHandler: RouteHandler<
  typeof getCatchementAreasIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
