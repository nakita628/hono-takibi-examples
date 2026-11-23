import type { RouteHandler } from '@hono/zod-openapi'
import type { getAreasRoute } from '../routes'

export const getAreasRouteHandler: RouteHandler<typeof getAreasRoute> = async (c) => {
  throw new Error('Not implemented')
}
