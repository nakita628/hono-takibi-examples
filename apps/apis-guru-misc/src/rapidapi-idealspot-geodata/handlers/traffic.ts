import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTrafficCountsSegmentIdRoute,
  getTrafficRoadsNearestLatitudeLongitudeRoute,
} from '../routes'

export const getTrafficCountsSegmentIdRouteHandler: RouteHandler<
  typeof getTrafficCountsSegmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTrafficRoadsNearestLatitudeLongitudeRouteHandler: RouteHandler<
  typeof getTrafficRoadsNearestLatitudeLongitudeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
