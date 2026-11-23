import type { RouteHandler } from '@hono/zod-openapi'
import type { getStatisticsRoute } from '../routes'

export const getStatisticsRouteHandler: RouteHandler<typeof getStatisticsRoute> = async (c) => {
  throw new Error('Not implemented')
}
