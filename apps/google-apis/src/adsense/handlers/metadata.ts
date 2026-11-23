import type { RouteHandler } from '@hono/zod-openapi'
import type { getMetadataDimensionsRoute, getMetadataMetricsRoute } from '../routes'

export const getMetadataDimensionsRouteHandler: RouteHandler<
  typeof getMetadataDimensionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMetadataMetricsRouteHandler: RouteHandler<typeof getMetadataMetricsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
