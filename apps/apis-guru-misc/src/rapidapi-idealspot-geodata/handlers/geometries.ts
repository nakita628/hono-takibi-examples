import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getGeometriesGeometryRoute,
  getGeometriesRegionsIntersectingLatitudeLongitudeRoute,
} from '../routes'

export const getGeometriesGeometryRouteHandler: RouteHandler<
  typeof getGeometriesGeometryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getGeometriesRegionsIntersectingLatitudeLongitudeRouteHandler: RouteHandler<
  typeof getGeometriesRegionsIntersectingLatitudeLongitudeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
