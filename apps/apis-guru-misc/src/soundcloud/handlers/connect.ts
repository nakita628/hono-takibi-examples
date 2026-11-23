import type { RouteHandler } from '@hono/zod-openapi'
import type { getConnectRoute } from '../routes'

export const getConnectRouteHandler: RouteHandler<typeof getConnectRoute> = async (c) => {
  throw new Error('Not implemented')
}
