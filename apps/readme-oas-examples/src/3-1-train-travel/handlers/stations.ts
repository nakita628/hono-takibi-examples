import type { RouteHandler } from '@hono/zod-openapi'
import type { getStationsRoute } from '../routes'

export const getStationsRouteHandler: RouteHandler<typeof getStationsRoute> = async (c) => {
  throw new Error('Not implemented')
}
