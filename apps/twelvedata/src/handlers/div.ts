import type { RouteHandler } from '@hono/zod-openapi'
import type { getDivRoute } from '../routes'

export const getDivRouteHandler: RouteHandler<typeof getDivRoute> = async (c) => {
  throw new Error('Not implemented')
}
