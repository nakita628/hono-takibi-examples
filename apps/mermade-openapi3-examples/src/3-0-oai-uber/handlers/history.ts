import type { RouteHandler } from '@hono/zod-openapi'
import type { getHistoryRoute } from '../routes'

export const getHistoryRouteHandler: RouteHandler<typeof getHistoryRoute> = async (c) => {
  throw new Error('Not implemented')
}
