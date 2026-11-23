import type { RouteHandler } from '@hono/zod-openapi'
import type { headCleanRoute } from '../routes'

export const headCleanRouteHandler: RouteHandler<typeof headCleanRoute> = async (c) => {
  throw new Error('Not implemented')
}
