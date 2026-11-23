import type { RouteHandler } from '@hono/zod-openapi'
import type { getHealthyRoute } from '../routes'

export const getHealthyRouteHandler: RouteHandler<typeof getHealthyRoute> = async (c) => {
  throw new Error('Not implemented')
}
