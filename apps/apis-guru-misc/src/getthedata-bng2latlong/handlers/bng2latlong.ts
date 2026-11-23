import type { RouteHandler } from '@hono/zod-openapi'
import type { getBng2latlongEastingNorthingRoute } from '../routes'

export const getBng2latlongEastingNorthingRouteHandler: RouteHandler<
  typeof getBng2latlongEastingNorthingRoute
> = async (c) => {
  throw new Error('Not implemented')
}
