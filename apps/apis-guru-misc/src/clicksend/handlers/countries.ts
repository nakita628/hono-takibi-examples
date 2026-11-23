import type { RouteHandler } from '@hono/zod-openapi'
import type { getCountriesRoute } from '../routes'

export const getCountriesRouteHandler: RouteHandler<typeof getCountriesRoute> = async (c) => {
  throw new Error('Not implemented')
}
