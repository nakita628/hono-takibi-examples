import type { RouteHandler } from '@hono/zod-openapi'
import type { getRegionsRoute } from '../routes'

export const getRegionsRouteHandler: RouteHandler<typeof getRegionsRoute> = async (c) => {
  throw new Error('Not implemented')
}
