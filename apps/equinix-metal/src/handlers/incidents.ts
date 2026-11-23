import type { RouteHandler } from '@hono/zod-openapi'
import type { getIncidentsRoute } from '../routes'

export const getIncidentsRouteHandler: RouteHandler<typeof getIncidentsRoute> = async (c) => {
  throw new Error('Not implemented')
}
