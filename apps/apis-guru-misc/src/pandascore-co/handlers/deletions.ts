import type { RouteHandler } from '@hono/zod-openapi'
import type { getDeletionsRoute } from '../routes'

export const getDeletionsRouteHandler: RouteHandler<typeof getDeletionsRoute> = async (c) => {
  throw new Error('Not implemented')
}
