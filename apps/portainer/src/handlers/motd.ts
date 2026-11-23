import type { RouteHandler } from '@hono/zod-openapi'
import type { getMotdRoute } from '../routes'

export const getMotdRouteHandler: RouteHandler<typeof getMotdRoute> = async (c) => {
  throw new Error('Not implemented')
}
