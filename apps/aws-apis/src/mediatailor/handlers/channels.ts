import type { RouteHandler } from '@hono/zod-openapi'
import type { getChannelsRoute } from '../routes'

export const getChannelsRouteHandler: RouteHandler<typeof getChannelsRoute> = async (c) => {
  throw new Error('Not implemented')
}
