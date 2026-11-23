import type { RouteHandler } from '@hono/zod-openapi'
import type { getPercentBRoute } from '../routes'

export const getPercentBRouteHandler: RouteHandler<typeof getPercentBRoute> = async (c) => {
  throw new Error('Not implemented')
}
