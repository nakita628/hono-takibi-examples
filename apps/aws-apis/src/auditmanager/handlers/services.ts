import type { RouteHandler } from '@hono/zod-openapi'
import type { getServicesRoute } from '../routes'

export const getServicesRouteHandler: RouteHandler<typeof getServicesRoute> = async (c) => {
  throw new Error('Not implemented')
}
