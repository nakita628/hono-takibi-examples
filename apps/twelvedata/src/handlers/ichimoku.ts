import type { RouteHandler } from '@hono/zod-openapi'
import type { getIchimokuRoute } from '../routes'

export const getIchimokuRouteHandler: RouteHandler<typeof getIchimokuRoute> = async (c) => {
  throw new Error('Not implemented')
}
