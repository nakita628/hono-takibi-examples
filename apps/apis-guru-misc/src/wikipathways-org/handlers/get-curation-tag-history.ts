import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetCurationTagHistoryRoute } from '../routes'

export const getGetCurationTagHistoryRouteHandler: RouteHandler<
  typeof getGetCurationTagHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
