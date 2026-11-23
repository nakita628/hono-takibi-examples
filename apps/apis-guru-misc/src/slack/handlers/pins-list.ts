import type { RouteHandler } from '@hono/zod-openapi'
import type { getPinsListRoute } from '../routes'

export const getPinsListRouteHandler: RouteHandler<typeof getPinsListRoute> = async (c) => {
  throw new Error('Not implemented')
}
