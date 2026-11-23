import type { RouteHandler } from '@hono/zod-openapi'
import type { getPopularCarsRoute } from '../routes'

export const getPopularCarsRouteHandler: RouteHandler<typeof getPopularCarsRoute> = async (c) => {
  throw new Error('Not implemented')
}
