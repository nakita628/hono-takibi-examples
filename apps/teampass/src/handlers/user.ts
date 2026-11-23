import type { RouteHandler } from '@hono/zod-openapi'
import type { getUserListRoute } from '../routes'

export const getUserListRouteHandler: RouteHandler<typeof getUserListRoute> = async (c) => {
  throw new Error('Not implemented')
}
