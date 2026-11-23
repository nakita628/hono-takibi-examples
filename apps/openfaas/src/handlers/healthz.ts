import type { RouteHandler } from '@hono/zod-openapi'
import type { getHealthzRoute } from '../routes'

export const getHealthzRouteHandler: RouteHandler<typeof getHealthzRoute> = async (c) => {
  throw new Error('Not implemented')
}
