import type { RouteHandler } from '@hono/zod-openapi'
import type { getEarliestTimestampRoute } from '../routes'

export const getEarliestTimestampRouteHandler: RouteHandler<
  typeof getEarliestTimestampRoute
> = async (c) => {
  throw new Error('Not implemented')
}
