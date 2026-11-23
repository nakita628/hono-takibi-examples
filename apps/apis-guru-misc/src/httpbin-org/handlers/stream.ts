import type { RouteHandler } from '@hono/zod-openapi'
import type { getStreamNRoute } from '../routes'

export const getStreamNRouteHandler: RouteHandler<typeof getStreamNRoute> = async (c) => {
  throw new Error('Not implemented')
}
