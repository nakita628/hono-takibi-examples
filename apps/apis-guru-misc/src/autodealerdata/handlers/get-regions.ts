import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetRegionsRoute } from '../routes'

export const getGetRegionsRouteHandler: RouteHandler<typeof getGetRegionsRoute> = async (c) => {
  throw new Error('Not implemented')
}
