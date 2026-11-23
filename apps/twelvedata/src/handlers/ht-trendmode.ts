import type { RouteHandler } from '@hono/zod-openapi'
import type { getHtTrendmodeRoute } from '../routes'

export const getHtTrendmodeRouteHandler: RouteHandler<typeof getHtTrendmodeRoute> = async (c) => {
  throw new Error('Not implemented')
}
