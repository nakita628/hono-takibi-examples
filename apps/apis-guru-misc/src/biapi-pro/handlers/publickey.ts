import type { RouteHandler } from '@hono/zod-openapi'
import type { getPublickeyRoute } from '../routes'

export const getPublickeyRouteHandler: RouteHandler<typeof getPublickeyRoute> = async (c) => {
  throw new Error('Not implemented')
}
