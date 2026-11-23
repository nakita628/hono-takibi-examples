import type { RouteHandler } from '@hono/zod-openapi'
import type { getDividendsRoute } from '../routes'

export const getDividendsRouteHandler: RouteHandler<typeof getDividendsRoute> = async (c) => {
  throw new Error('Not implemented')
}
