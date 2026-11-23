import type { RouteHandler } from '@hono/zod-openapi'
import type { getNetworkRoute } from '../routes'

export const getNetworkRouteHandler: RouteHandler<typeof getNetworkRoute> = async (c) => {
  throw new Error('Not implemented')
}
