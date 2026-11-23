import type { RouteHandler } from '@hono/zod-openapi'
import type { getBroadcastsRoute } from '../routes'

export const getBroadcastsRouteHandler: RouteHandler<typeof getBroadcastsRoute> = async (c) => {
  throw new Error('Not implemented')
}
