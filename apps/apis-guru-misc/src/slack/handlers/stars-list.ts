import type { RouteHandler } from '@hono/zod-openapi'
import type { getStarsListRoute } from '../routes'

export const getStarsListRouteHandler: RouteHandler<typeof getStarsListRoute> = async (c) => {
  throw new Error('Not implemented')
}
