import type { RouteHandler } from '@hono/zod-openapi'
import type { getMeteringReadingRoute, postMeteringReadingRoute } from '../routes'

export const getMeteringReadingRouteHandler: RouteHandler<typeof getMeteringReadingRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postMeteringReadingRouteHandler: RouteHandler<
  typeof postMeteringReadingRoute
> = async (c) => {
  throw new Error('Not implemented')
}
