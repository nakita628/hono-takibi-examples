import type { RouteHandler } from '@hono/zod-openapi'
import type { getVersionRoute } from '../routes'

export const getVersionRouteHandler: RouteHandler<typeof getVersionRoute> = async (c) => {
  throw new Error('Not implemented')
}
