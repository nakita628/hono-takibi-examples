import type { RouteHandler } from '@hono/zod-openapi'
import type { getCountriesTypeRoute } from '../routes'

export const getCountriesTypeRouteHandler: RouteHandler<typeof getCountriesTypeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
