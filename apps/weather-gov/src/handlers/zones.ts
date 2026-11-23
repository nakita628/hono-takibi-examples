import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getZonesForecastZoneIdObservationsRoute,
  getZonesForecastZoneIdStationsRoute,
  getZonesRoute,
  getZonesTypeRoute,
  getZonesTypeZoneIdForecastRoute,
  getZonesTypeZoneIdRadioRoute,
  getZonesTypeZoneIdRoute,
} from '../routes'

export const getZonesRouteHandler: RouteHandler<typeof getZonesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesTypeRouteHandler: RouteHandler<typeof getZonesTypeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesTypeZoneIdRouteHandler: RouteHandler<typeof getZonesTypeZoneIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getZonesTypeZoneIdForecastRouteHandler: RouteHandler<
  typeof getZonesTypeZoneIdForecastRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesTypeZoneIdRadioRouteHandler: RouteHandler<
  typeof getZonesTypeZoneIdRadioRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesForecastZoneIdObservationsRouteHandler: RouteHandler<
  typeof getZonesForecastZoneIdObservationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesForecastZoneIdStationsRouteHandler: RouteHandler<
  typeof getZonesForecastZoneIdStationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
