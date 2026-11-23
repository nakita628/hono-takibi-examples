import type { RouteHandler } from '@hono/zod-openapi'
import type { getUserRoute } from '../routes'

export const getUserRouteHandler: RouteHandler<typeof getUserRoute> = async (c) => {
  throw new Error('Not implemented')
}
