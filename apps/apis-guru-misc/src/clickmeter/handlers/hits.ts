import type { RouteHandler } from '@hono/zod-openapi'
import type { getHitsRoute } from '../routes'

export const getHitsRouteHandler: RouteHandler<typeof getHitsRoute> = async (c) => {
  throw new Error('Not implemented')
}
