import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPointsLatitudeLongitudeRadioRoute,
  getPointsLatitudeLongitudeRoute,
  getPointsLatitudeLongitudeStationsRoute,
} from '../routes'

export const getPointsLatitudeLongitudeRouteHandler: RouteHandler<
  typeof getPointsLatitudeLongitudeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPointsLatitudeLongitudeRadioRouteHandler: RouteHandler<
  typeof getPointsLatitudeLongitudeRadioRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPointsLatitudeLongitudeStationsRouteHandler: RouteHandler<
  typeof getPointsLatitudeLongitudeStationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
