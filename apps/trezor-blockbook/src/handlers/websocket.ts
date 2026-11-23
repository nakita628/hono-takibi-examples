import type { RouteHandler } from '@hono/zod-openapi'
import type { getWebsocketRoute } from '../routes'

export const getWebsocketRouteHandler: RouteHandler<typeof getWebsocketRoute> = async (c) => {
  throw new Error('Not implemented')
}
