import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionGetSendStatisticsRoute, postActionGetSendStatisticsRoute } from '../routes'

export const getActionGetSendStatisticsRouteHandler: RouteHandler<
  typeof getActionGetSendStatisticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetSendStatisticsRouteHandler: RouteHandler<
  typeof postActionGetSendStatisticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
