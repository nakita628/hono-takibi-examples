import type { RouteHandler } from '@hono/zod-openapi'
import type { getFleetFleetMsearchRoute, postFleetFleetMsearchRoute } from '../routes'

export const getFleetFleetMsearchRouteHandler: RouteHandler<
  typeof getFleetFleetMsearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postFleetFleetMsearchRouteHandler: RouteHandler<
  typeof postFleetFleetMsearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
