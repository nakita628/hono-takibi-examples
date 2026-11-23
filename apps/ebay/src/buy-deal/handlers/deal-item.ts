import type { RouteHandler } from '@hono/zod-openapi'
import type { getDealItemRoute } from '../routes'

export const getDealItemRouteHandler: RouteHandler<typeof getDealItemRoute> = async (c) => {
  throw new Error('Not implemented')
}
