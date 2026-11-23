import type { RouteHandler } from '@hono/zod-openapi'
import type { getBadgeRoute } from '../routes'

export const getBadgeRouteHandler: RouteHandler<typeof getBadgeRoute> = async (c) => {
  throw new Error('Not implemented')
}
