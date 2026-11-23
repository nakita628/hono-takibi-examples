import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getEventsV3HealthRoute,
  getEventsV3Route,
  getEventsV3StatusesDeviceCountsRoute,
  getEventsV3StatusesRoute,
  getEventsV3TrackingIdRoute,
  getEventsV3VersionRoute,
} from '../routes'

export const getEventsV3RouteHandler: RouteHandler<typeof getEventsV3Route> = async (c) => {
  throw new Error('Not implemented')
}

export const getEventsV3HealthRouteHandler: RouteHandler<typeof getEventsV3HealthRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getEventsV3StatusesRouteHandler: RouteHandler<
  typeof getEventsV3StatusesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEventsV3StatusesDeviceCountsRouteHandler: RouteHandler<
  typeof getEventsV3StatusesDeviceCountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEventsV3VersionRouteHandler: RouteHandler<typeof getEventsV3VersionRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getEventsV3TrackingIdRouteHandler: RouteHandler<
  typeof getEventsV3TrackingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
