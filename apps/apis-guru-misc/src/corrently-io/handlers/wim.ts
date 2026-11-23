import type { RouteHandler } from '@hono/zod-openapi'
import type { getWimStatusRoute } from '../routes'

export const getWimStatusRouteHandler: RouteHandler<typeof getWimStatusRoute> = async (c) => {
  throw new Error('Not implemented')
}
