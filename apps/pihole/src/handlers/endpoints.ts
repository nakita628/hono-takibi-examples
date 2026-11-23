import type { RouteHandler } from '@hono/zod-openapi'
import type { getEndpointsRoute } from '../routes'

export const getEndpointsRouteHandler: RouteHandler<typeof getEndpointsRoute> = async (c) => {
  throw new Error('Not implemented')
}
