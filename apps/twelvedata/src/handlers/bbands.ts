import type { RouteHandler } from '@hono/zod-openapi'
import type { getBbandsRoute } from '../routes'

export const getBbandsRouteHandler: RouteHandler<typeof getBbandsRoute> = async (c) => {
  throw new Error('Not implemented')
}
