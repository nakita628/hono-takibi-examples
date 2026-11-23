import type { RouteHandler } from '@hono/zod-openapi'
import type { getPositionsRoute } from '../routes'

export const getPositionsRouteHandler: RouteHandler<typeof getPositionsRoute> = async (c) => {
  throw new Error('Not implemented')
}
