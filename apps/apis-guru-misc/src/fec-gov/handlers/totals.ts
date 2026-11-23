import type { RouteHandler } from '@hono/zod-openapi'
import type { getTotalsByEntityIndexRoute, getTotalsEntityTypeIndexRoute } from '../routes'

export const getTotalsByEntityIndexRouteHandler: RouteHandler<
  typeof getTotalsByEntityIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTotalsEntityTypeIndexRouteHandler: RouteHandler<
  typeof getTotalsEntityTypeIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
