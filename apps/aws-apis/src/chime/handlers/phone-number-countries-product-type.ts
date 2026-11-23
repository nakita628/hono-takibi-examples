import type { RouteHandler } from '@hono/zod-openapi'
import type { getPhoneNumberCountriesProductTypeRoute } from '../routes'

export const getPhoneNumberCountriesProductTypeRouteHandler: RouteHandler<
  typeof getPhoneNumberCountriesProductTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
