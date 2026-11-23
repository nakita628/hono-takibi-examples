import type { RouteHandler } from '@hono/zod-openapi'
import type { getDemaRoute } from '../routes'

export const getDemaRouteHandler: RouteHandler<typeof getDemaRoute> = async (c) => {
  throw new Error('Not implemented')
}
