import type { RouteHandler } from '@hono/zod-openapi'
import type { getConfigRoute } from '../routes'

export const getConfigRouteHandler: RouteHandler<typeof getConfigRoute> = async (c) => {
  throw new Error('Not implemented')
}
