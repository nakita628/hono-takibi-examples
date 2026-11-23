import type { RouteHandler } from '@hono/zod-openapi'
import type { getHealthCheckRoute } from '../routes'

export const getHealthCheckRouteHandler: RouteHandler<typeof getHealthCheckRoute> = async (c) => {
  throw new Error('Not implemented')
}
