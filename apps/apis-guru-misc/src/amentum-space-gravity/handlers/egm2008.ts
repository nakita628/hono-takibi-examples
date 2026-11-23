import type { RouteHandler } from '@hono/zod-openapi'
import type { getEgm2008GeoidHeightRoute, getEgm2008GravityAnomalyRoute } from '../routes'

export const getEgm2008GeoidHeightRouteHandler: RouteHandler<
  typeof getEgm2008GeoidHeightRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEgm2008GravityAnomalyRouteHandler: RouteHandler<
  typeof getEgm2008GravityAnomalyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
