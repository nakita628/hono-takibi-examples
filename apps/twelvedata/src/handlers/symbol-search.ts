import type { RouteHandler } from '@hono/zod-openapi'
import type { getSymbolSearchRoute } from '../routes'

export const getSymbolSearchRouteHandler: RouteHandler<typeof getSymbolSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}
