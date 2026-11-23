import type { RouteHandler } from '@hono/zod-openapi'
import type { getServersRoute } from '../routes'

export const getServersRouteHandler: RouteHandler<typeof getServersRoute> = async (c) => {
  throw new Error('Not implemented')
}
