import type { RouteHandler } from '@hono/zod-openapi'
import type { getBondsRoute } from '../routes'

export const getBondsRouteHandler: RouteHandler<typeof getBondsRoute> = async (c) => {
  throw new Error('Not implemented')
}
