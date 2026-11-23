import type { RouteHandler } from '@hono/zod-openapi'
import type { getClickstreamRoute } from '../routes'

export const getClickstreamRouteHandler: RouteHandler<typeof getClickstreamRoute> = async (c) => {
  throw new Error('Not implemented')
}
