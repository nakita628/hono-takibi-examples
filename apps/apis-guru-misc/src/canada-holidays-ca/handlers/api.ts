import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getApiV1HolidaysHolidayIdRoute,
  getApiV1HolidaysRoute,
  getApiV1ProvincesProvinceIdRoute,
  getApiV1ProvincesRoute,
  getApiV1Route,
  getApiV1SpecRoute,
} from '../routes'

export const getApiV1RouteHandler: RouteHandler<typeof getApiV1Route> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1HolidaysRouteHandler: RouteHandler<typeof getApiV1HolidaysRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1HolidaysHolidayIdRouteHandler: RouteHandler<
  typeof getApiV1HolidaysHolidayIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ProvincesRouteHandler: RouteHandler<typeof getApiV1ProvincesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1ProvincesProvinceIdRouteHandler: RouteHandler<
  typeof getApiV1ProvincesProvinceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SpecRouteHandler: RouteHandler<typeof getApiV1SpecRoute> = async (c) => {
  throw new Error('Not implemented')
}
