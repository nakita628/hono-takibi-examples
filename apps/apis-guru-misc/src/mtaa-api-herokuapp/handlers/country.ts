import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCountryRegionDistrictRoute,
  getCountryRegionDistrictWardRoute,
  getCountryRegionDistrictWardStreetRoute,
  getCountryRegionRoute,
  getCountryRoute,
} from '../routes'

export const getCountryRouteHandler: RouteHandler<typeof getCountryRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCountryRegionRouteHandler: RouteHandler<typeof getCountryRegionRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getCountryRegionDistrictRouteHandler: RouteHandler<
  typeof getCountryRegionDistrictRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCountryRegionDistrictWardRouteHandler: RouteHandler<
  typeof getCountryRegionDistrictWardRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCountryRegionDistrictWardStreetRouteHandler: RouteHandler<
  typeof getCountryRegionDistrictWardStreetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
