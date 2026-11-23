import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteBgpDynamicNeighborsIdRoute, getBgpDynamicNeighborsIdRoute } from '../routes'

export const deleteBgpDynamicNeighborsIdRouteHandler: RouteHandler<
  typeof deleteBgpDynamicNeighborsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBgpDynamicNeighborsIdRouteHandler: RouteHandler<
  typeof getBgpDynamicNeighborsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
