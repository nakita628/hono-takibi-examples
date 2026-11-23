import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getRadarProfilersStationIdRoute,
  getRadarQueuesHostRoute,
  getRadarServersIdRoute,
  getRadarServersRoute,
  getRadarSpgdsRoute,
  getRadarStationsRoute,
  getRadarStationsStationIdAlarmsRoute,
  getRadarStationsStationIdRoute,
} from '../routes'

export const getRadarServersRouteHandler: RouteHandler<typeof getRadarServersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarServersIdRouteHandler: RouteHandler<typeof getRadarServersIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getRadarSpgdsRouteHandler: RouteHandler<typeof getRadarSpgdsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarStationsRouteHandler: RouteHandler<typeof getRadarStationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getRadarStationsStationIdRouteHandler: RouteHandler<
  typeof getRadarStationsStationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarStationsStationIdAlarmsRouteHandler: RouteHandler<
  typeof getRadarStationsStationIdAlarmsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRadarQueuesHostRouteHandler: RouteHandler<typeof getRadarQueuesHostRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getRadarProfilersStationIdRouteHandler: RouteHandler<
  typeof getRadarProfilersStationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
