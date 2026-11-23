import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getGridpointsWfoXYForecastHourlyRoute,
  getGridpointsWfoXYForecastRoute,
  getGridpointsWfoXYRoute,
  getGridpointsWfoXYStationsRoute,
} from '../routes'

export const getGridpointsWfoXYRouteHandler: RouteHandler<typeof getGridpointsWfoXYRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getGridpointsWfoXYForecastRouteHandler: RouteHandler<
  typeof getGridpointsWfoXYForecastRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getGridpointsWfoXYForecastHourlyRouteHandler: RouteHandler<
  typeof getGridpointsWfoXYForecastHourlyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getGridpointsWfoXYStationsRouteHandler: RouteHandler<
  typeof getGridpointsWfoXYStationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
