import type { RouteHandler } from '@hono/zod-openapi'
import type { getDripRoute } from '../routes'

export const getDripRouteHandler: RouteHandler<typeof getDripRoute> = async (c) => {
  throw new Error('Not implemented')
}
