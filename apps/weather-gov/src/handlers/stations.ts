import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getStationsRoute,
  getStationsStationIdObservationsLatestRoute,
  getStationsStationIdObservationsRoute,
  getStationsStationIdObservationsTimeRoute,
  getStationsStationIdRoute,
  getStationsStationIdTafsDateTimeRoute,
  getStationsStationIdTafsRoute,
} from '../routes'

export const getStationsStationIdObservationsRouteHandler: RouteHandler<
  typeof getStationsStationIdObservationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStationsStationIdObservationsLatestRouteHandler: RouteHandler<
  typeof getStationsStationIdObservationsLatestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStationsStationIdObservationsTimeRouteHandler: RouteHandler<
  typeof getStationsStationIdObservationsTimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStationsStationIdTafsRouteHandler: RouteHandler<
  typeof getStationsStationIdTafsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStationsStationIdTafsDateTimeRouteHandler: RouteHandler<
  typeof getStationsStationIdTafsDateTimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStationsRouteHandler: RouteHandler<typeof getStationsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getStationsStationIdRouteHandler: RouteHandler<
  typeof getStationsStationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
