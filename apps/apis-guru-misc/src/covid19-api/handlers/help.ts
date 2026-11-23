import type { RouteHandler } from '@hono/zod-openapi'
import type { getHelpCountriesRoute } from '../routes'

export const getHelpCountriesRouteHandler: RouteHandler<typeof getHelpCountriesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
