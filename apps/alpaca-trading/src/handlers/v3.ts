import type { RouteHandler } from '@hono/zod-openapi'
import type { getV3CalendarMarketRoute, getV3ClockRoute } from '../routes'

export const getV3CalendarMarketRouteHandler: RouteHandler<
  typeof getV3CalendarMarketRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV3ClockRouteHandler: RouteHandler<typeof getV3ClockRoute> = async (c) => {
  throw new Error('Not implemented')
}
