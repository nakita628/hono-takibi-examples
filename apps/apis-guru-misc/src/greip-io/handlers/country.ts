import type { RouteHandler } from '@hono/zod-openapi'
import type { getCountryRoute } from '../routes'

export const getCountryRouteHandler: RouteHandler<typeof getCountryRoute> = async (c) => {
  throw new Error('Not implemented')
}
