import type { RouteHandler } from '@hono/zod-openapi'
import type { getOctocatRoute } from '../routes'

export const getOctocatRouteHandler: RouteHandler<typeof getOctocatRoute> = async (c) => {
  throw new Error('Not implemented')
}
