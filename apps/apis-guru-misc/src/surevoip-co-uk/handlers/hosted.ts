import type { RouteHandler } from '@hono/zod-openapi'
import type { getHostedRoute } from '../routes'

export const getHostedRouteHandler: RouteHandler<typeof getHostedRoute> = async (c) => {
  throw new Error('Not implemented')
}
