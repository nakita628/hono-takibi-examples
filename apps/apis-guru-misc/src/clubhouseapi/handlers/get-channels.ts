import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetChannelsRoute } from '../routes'

export const getGetChannelsRouteHandler: RouteHandler<typeof getGetChannelsRoute> = async (c) => {
  throw new Error('Not implemented')
}
