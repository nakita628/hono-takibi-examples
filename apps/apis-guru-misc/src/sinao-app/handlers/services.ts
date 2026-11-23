import type { RouteHandler } from '@hono/zod-openapi'
import type { getServicesViesSirenRoute, postServicesCollectorRoute } from '../routes'

export const postServicesCollectorRouteHandler: RouteHandler<
  typeof postServicesCollectorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicesViesSirenRouteHandler: RouteHandler<
  typeof getServicesViesSirenRoute
> = async (c) => {
  throw new Error('Not implemented')
}
