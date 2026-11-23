import type { RouteHandler } from '@hono/zod-openapi'
import type { getDailyUsageDateRoute } from '../routes'

export const getDailyUsageDateRouteHandler: RouteHandler<typeof getDailyUsageDateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
