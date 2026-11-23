import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV2CalendarMarketRoute,
  getV2ClockRoute,
  getV2EventsAdminActionsRoute,
  getV2EventsFundingStatusRoute,
  getV2EventsIposRoute,
  getV2EventsJournalsStatusRoute,
  getV2EventsRebalancerRoute,
  getV2EventsSystemRoute,
  getV2EventsTradesRoute,
} from '../routes'

export const getV2CalendarMarketRouteHandler: RouteHandler<
  typeof getV2CalendarMarketRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2ClockRouteHandler: RouteHandler<typeof getV2ClockRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2EventsAdminActionsRouteHandler: RouteHandler<
  typeof getV2EventsAdminActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2EventsFundingStatusRouteHandler: RouteHandler<
  typeof getV2EventsFundingStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2EventsIposRouteHandler: RouteHandler<typeof getV2EventsIposRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2EventsJournalsStatusRouteHandler: RouteHandler<
  typeof getV2EventsJournalsStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2EventsRebalancerRouteHandler: RouteHandler<
  typeof getV2EventsRebalancerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2EventsSystemRouteHandler: RouteHandler<typeof getV2EventsSystemRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2EventsTradesRouteHandler: RouteHandler<typeof getV2EventsTradesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
